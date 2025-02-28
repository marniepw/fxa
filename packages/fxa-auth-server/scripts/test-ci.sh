#!/bin/bash -e

DIR=$(dirname "$0")
cd "$DIR/.."

yarn workspaces focus fxa-auth-server

export NODE_ENV=dev
export CORS_ORIGIN="http://foo,http://bar"

DEFAULT_ARGS="--require esbuild-register --recursive --timeout 5000 --exit --reporter mocha-junit-reporter"

node -r esbuild-register ./scripts/gen_keys.js
node -r esbuild-register ./scripts/gen_vapid_keys.js
node -r esbuild-register ./scripts/oauth_gen_keys.js
../../_scripts/check-mysql.sh
../../_scripts/check-url.sh localhost:9090
node ../db-migrations/bin/patcher.mjs

# Make sure we have a fresh version of l10n files... This is just a sanity check. It shouldn't be needed...
# rm -rf public
# yarn run postinstall

# Migrate current strings
yarn run merge-ftl
yarn run merge-ftl:test

# Process sass for rendering of email templates
yarn run emails-scss

TESTS=(local oauth remote scripts)
for t in "${TESTS[@]}"; do
  echo "testing $t"
  ./scripts/mocha-coverage.js $DEFAULT_ARGS --reporter-options mochaFile="../../artifacts/tests/$t/test-results.xml" "test/$t"
done

yarn run clean-up-old-ci-stripe-customers
