#!/bin/bash -ex

DIR=$(dirname "$0")

function test_suite() {
  local suite=$1
  local numGroups=$2

  for i in $(seq "$numGroups")
  do
    node tests/intern.js --suites="${suite}" --output="../../artifacts/tests/${suite}-${numGroups}-${i}-results.xml" --groupsCount="${numGroups}" --groupNum="${i}" || \
    node tests/intern.js --suites="${suite}" --output="../../artifacts/tests/${suite}-${numGroups}-${i}-results.xml" --groupsCount="${numGroups}" --groupNum="${i}" --grep="$(<rerun.txt)"
  done
}

cd "$DIR/.."

mkdir -p config
cp ../version.json ./
cp ../version.json config

cd ../../
mkdir -p ~/.pm2/logs
mkdir -p artifacts/tests

yarn workspaces foreach \
    --verbose \
    --topological-dev \
    --include 123done \
    --include browserid-verifier \
    --include fxa-auth-server \
    --include fxa-content-server \
    --include fxa-graphql-api \
    --include fxa-payments-server \
    --include fxa-profile-server \
    --include fxa-react \
    --include fxa-settings \
    --include fxa-shared \
    run start > ~/.pm2/logs/startup.log

npx pm2 ls

cd packages/fxa-content-server

test_suite circle 3

# The last node currently has the least work to do in the above tests
if [[ "${CIRCLE_NODE_INDEX}" == "2" ]]; then
  node tests/intern.js --suites='server' --output='../../artifacts/tests/server-results.xml'
  node tests/intern.js --suites='pairing' --output='../../artifacts/tests/pairing-results.xml'
fi
