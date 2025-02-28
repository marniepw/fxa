## Deprecation notice

Changes are now documented at https://github.com/mozilla/fxa/releases

## 1.236.1

No changes.


## 1.236.0

### Other changes

- deps: Upgrade tailwindcss (v1.9 to v3), autoprefixer, ## 1.235.2 all SB deps, replace postcss deps, remove other deps ([d866a06d76](https://github.com/mozilla/fxa/commit/d866a06d76))
- fxa-admin-panel: Upgrade @sentry/tracing from ^6.19.2 to ^7.3.1 ([ad82ed8ccc](https://github.com/mozilla/fxa/commit/ad82ed8ccc))
- admin-panel: Remove graphql package ([b0e1a670c5](https://github.com/mozilla/fxa/commit/b0e1a670c5))
- admin-panel: Upgrade @sentry/node from ^6.19.2 to ^7.2.0 ([9c7ff58f58](https://github.com/mozilla/fxa/commit/9c7ff58f58))
- admin-panel: Upgrade @types/convict from ^5.2.2 to ^6.1.1 ([73284d9f27](https://github.com/mozilla/fxa/commit/73284d9f27))
- admin-panel: Remove unused dependencies ([40cc469f26](https://github.com/mozilla/fxa/commit/40cc469f26))

## 1.235.2

No changes.

## 1.235.1

No changes.

## 1.235.0

### Bug fixes

- admin-panel: Fix warnings about wrapping components rendered in 'act' ([f342373b9](https://github.com/mozilla/fxa/commit/f342373b9))
- admin-panel: Key subscription date fields were rendered incorrectly ([5bda7eb74](https://github.com/mozilla/fxa/commit/5bda7eb74))
- admin-panel: Fix 404 errors that would happen on direct navigation to a page. ([9547e1e0e](https://github.com/mozilla/fxa/commit/9547e1e0e))

### Other changes

- admin-panel: Remove Site Status and Admin Logs sections ([62ebcfd5b](https://github.com/mozilla/fxa/commit/62ebcfd5b))
- deps-dev: bump ts-jest from 28.0.4 to 28.0.5 ([3cd156167](https://github.com/mozilla/fxa/commit/3cd156167))
- deps-dev: bump ts-jest from 27.1.4 to 28.0.4 ([2d85bc088](https://github.com/mozilla/fxa/commit/2d85bc088))

## 1.234.2

No changes.

## 1.234.1

No changes.

## 1.234.0

### New features

- admin: Create 'Relying Parties' page ## 1.233.1 display RPs from db ([c909a63846](https://github.com/mozilla/fxa/commit/c909a63846))

### Other changes

- deps-dev: bump @testing-library/react from 12.1.3 to 12.1.5 ([4373180aad](https://github.com/mozilla/fxa/commit/4373180aad))
- deps: bump convict from 6.2.2 to 6.2.3 ([0b915bbfa0](https://github.com/mozilla/fxa/commit/0b915bbfa0))

## 1.233.1

No changes.

## 1.233.0

### New features

- admin-panel: Add information pertaining to bounceType ([b465f92070](https://github.com/mozilla/fxa/commit/b465f92070))

### Bug fixes

- admin-panel: Fix remote group resolution ([6339b0b966](https://github.com/mozilla/fxa/commit/6339b0b966))
- fxa-admin-panel: 39fa127b12 fix(fxa-admin-panel) use clearer icons to indicate permission status ([39fa127b12](https://github.com/mozilla/fxa/commit/39fa127b12))

### Other changes

- admin-panel: Provide link to manage customer subscription in stripe. ([f639bce573](https://github.com/mozilla/fxa/commit/f639bce573))
- admin-panel: Add nestjs subscription service ([0db515ba4d](https://github.com/mozilla/fxa/commit/0db515ba4d))
- lint: Tweak ESLint config for fxa-admin-panel ([7e214229c1](https://github.com/mozilla/fxa/commit/7e214229c1))
- deps-dev: bump supertest from 6.2.2 to 6.2.3 ([bb529cfae3](https://github.com/mozilla/fxa/commit/bb529cfae3))
- deps-dev: bump @testing-library/user-event from 14.1.1 to 14.2.0 ([8f0c475f1f](https://github.com/mozilla/fxa/commit/8f0c475f1f))
- deps-dev: bump @testing-library/jest-dom from 5.16.2 to 5.16.4 ([06460e4924](https://github.com/mozilla/fxa/commit/06460e4924))
- deps: bump @sentry/browser from 6.19.4 to 6.19.7 ([f4f16f396f](https://github.com/mozilla/fxa/commit/f4f16f396f))

## 1.232.5

No changes.

## 1.232.4

No changes.

## 1.232.3

No changes.

## 1.232.2

No changes.

## 1.232.1

### Bug fixes

- admin-panel: Fix remote group resolution ([8b580cc7d](https://github.com/mozilla/fxa/commit/8b580cc7d))

## 1.232.0

### New features

- fxa-admin-panel: 52d49c0cd feat(fxa-admin-panel) allow admin to enable login for account from admin panel ([52d49c0cd](https://github.com/mozilla/fxa/commit/52d49c0cd))
- fxa-admin-panel: add new event name to db ([956896b7f](https://github.com/mozilla/fxa/commit/956896b7f))

### Bug fixes

- fxa-admin-panel: 0ad1c7434 fix(fxa-admin-panel) temporarily add logging to debug on staging and update tests ([0ad1c7434](https://github.com/mozilla/fxa/commit/0ad1c7434))
- admin-panel: trim whitespace from admin panel search bar Because: ([0b3da7a51](https://github.com/mozilla/fxa/commit/0b3da7a51))

### Other changes

- admin-panel: Add guard to serverside ([6d3720096](https://github.com/mozilla/fxa/commit/6d3720096))

## 1.231.4

No changes.

## 1.231.3

No changes.

## 1.231.2

No changes.

## 1.231.1

No changes.

## 1.231.0

### New features

- admin-panel: Add subscriptions field + display in UI, CSS tweaks ([d42d6cbbc](https://github.com/mozilla/fxa/commit/d42d6cbbc))
- fxa-admin-panel: get diagnosticCode from event and add to bounce obj ([24e4b400c](https://github.com/mozilla/fxa/commit/24e4b400c))

### Bug fixes

- admin-panel: revise style ([bc8464ec9](https://github.com/mozilla/fxa/commit/bc8464ec9))

### Other changes

- deps: bump @emotion/react from 11.7.1 to 11.9.0 ([023968ab6](https://github.com/mozilla/fxa/commit/023968ab6))
- deps-dev: bump @testing-library/user-event from 13.5.0 to 14.1.1 ([44d997fc1](https://github.com/mozilla/fxa/commit/44d997fc1))
- deps: bump convict from 6.2.1 to 6.2.2 ([f8237797a](https://github.com/mozilla/fxa/commit/f8237797a))
- admin-panel: Add support for user group spoofing ([e54cbbda9](https://github.com/mozilla/fxa/commit/e54cbbda9))

## 1.230.5

No changes.

## 1.230.4

No changes.

## 1.230.3

No changes.

## 1.230.2

No changes.

## 1.230.1

No changes.

## 1.230.0

### Bug fixes

- admin-panel: Fix sentry csp warning ([f9639fce8b](https://github.com/mozilla/fxa/commit/f9639fce8b))

### Other changes

- all: Change default sentry trace sample rate to 0 ([8b4079c665](https://github.com/mozilla/fxa/commit/8b4079c665))
- deps: bump @sentry/browser from 6.19.2 to 6.19.4 ([a360064ed7](https://github.com/mozilla/fxa/commit/a360064ed7))
- deps-dev: bump ts-jest from 27.1.3 to 27.1.4 ([947392814d](https://github.com/mozilla/fxa/commit/947392814d))

## 1.229.2

### Other changes

- all: Change default sentry trace sample rate to 0 ([34cc815199](https://github.com/mozilla/fxa/commit/34cc815199))

## 1.229.1

No changes.

## 1.229.0

### Other changes

- all: d584a10bc maintenance(all) - Prepare for new sentry ([d584a10bc](https://github.com/mozilla/fxa/commit/d584a10bc))
- admin-panel: Add support for user group spoofing ([53e93b9b1](https://github.com/mozilla/fxa/commit/53e93b9b1))
- deps: bump react-router-dom from 6.2.1 to 6.2.2 ([51401e914](https://github.com/mozilla/fxa/commit/51401e914))

## 1.228.7

No changes.

## 1.228.6

No changes.

## 1.228.5

No changes.

## 1.228.4

No changes.

## 1.228.3

No changes.

## 1.228.2

### Other changes

- 12ea05171 Cherry pick squash for experimental dot releases v1.226.5 to v1.226.9 on train-226. These changes address issues with connection pool spiking and high latency on the attached clients route. ([12ea05171](https://github.com/mozilla/fxa/commit/12ea05171))

## 1.228.1

No changes.

## 1.228.0

No changes.

## 1.227.1

### Other changes

- deps: bump react-dom from 16.14.0 to 17.0.2 (#12036)" (#12088) ([6d9b9c8a8](https://github.com/mozilla/fxa/commit/6d9b9c8a8))

## 1.227.0

### Other changes

- deps-dev: bump @testing-library/react from 12.1.2 to 12.1.3 (#12042) ([a3f0f7aec](https://github.com/mozilla/fxa/commit/a3f0f7aec))
- deps: bump react-dom from 16.14.0 to 17.0.2 (#12036) ([64f0864fb](https://github.com/mozilla/fxa/commit/64f0864fb))
- #12061: 85c20f658 Train 226.3 (#12061) ([85c20f658](https://github.com/mozilla/fxa/commit/85c20f658))
- deps-dev: bump @testing-library/jest-dom from 5.16.1 to 5.16.2 (#12032) ([2fc10e301](https://github.com/mozilla/fxa/commit/2fc10e301))
- deps-dev: bump jest from 27.4.7 to 27.5.1 (#11974) ([8ba05a381](https://github.com/mozilla/fxa/commit/8ba05a381))

## 1.226.4

No changes.

## 1.226.3

No changes.

## 1.226.2

### Other changes

- shared,auth,admin: Refactor attached-clients so routines can be shared with admin panel (#11817)" ([4cbc3bce3](https://github.com/mozilla/fxa/commit/4cbc3bce3))
- #11915: 9f29305b3 Revert "Issues/11091 (#11915)" ([9f29305b3](https://github.com/mozilla/fxa/commit/9f29305b3))
- google: Add support for linked accounts in admin panel (#11937)" ([580cc2fcc](https://github.com/mozilla/fxa/commit/580cc2fcc))

## 1.226.1

No changes.

## 1.226.0

### New features

- google: Add support for linked accounts in admin panel (#11937) ([7c93a6b9d](https://github.com/mozilla/fxa/commit/7c93a6b9d))

### Bug fixes

- admin-panel: FXA-4231 - missing Device type for desktop sessions (#11884) ([f2d1f282b](https://github.com/mozilla/fxa/commit/f2d1f282b))

### Other changes

- #11915: e6531d51c Issues/11091 (#11915) ([e6531d51c](https://github.com/mozilla/fxa/commit/e6531d51c))
- shared,auth,admin: Refactor attached-clients so routines can be shared with admin panel (#11817) ([6b89206ff](https://github.com/mozilla/fxa/commit/6b89206ff))

## 1.225.3

No changes.

## 1.225.2

No changes.

## 1.225.1

No changes.

## 1.225.0

### Bug fixes

- admin: Fix query by UID (#11744) ([7c96878bb](https://github.com/mozilla/fxa/commit/7c96878bb))

### Other changes

- deps-dev: bump supertest from 6.2.1 to 6.2.2 (#11735) ([ebd316a6a](https://github.com/mozilla/fxa/commit/ebd316a6a))
- admin: Rename Current Session to Connected Services (#11685) ([a59f64bd1](https://github.com/mozilla/fxa/commit/a59f64bd1))
- deps-dev: bump ts-jest from 27.1.2 to 27.1.3 (#11675) ([8e8ffb6b2](https://github.com/mozilla/fxa/commit/8e8ffb6b2))
- deps-dev: bump @testing-library/dom from 8.11.1 to 8.11.2 ([ef8e66bec](https://github.com/mozilla/fxa/commit/ef8e66bec))

## 1.224.4

No changes.

## 1.224.3

No changes.

## 1.224.2

No changes.

## 1.224.1

No changes.

## 1.224.0

### Other changes

- deps-dev: bump @storybook/addon-actions from 6.3.12 to 6.4.12 (#11635) ([b686fd5a9](https://github.com/mozilla/fxa/commit/b686fd5a9))
- deps-dev: bump @storybook/addon-links from 6.3.12 to 6.3.13 (#11621) ([79d0f2abc](https://github.com/mozilla/fxa/commit/79d0f2abc))
- deps-dev: bump supertest from 6.1.6 to 6.2.1 (#11619) ([443b0b099](https://github.com/mozilla/fxa/commit/443b0b099))
- deps: bump autoprefixer from 9.8.8 to 10.4.2" (#11605) ([39377d88a](https://github.com/mozilla/fxa/commit/39377d88a))
- deps: bump autoprefixer from 9.8.8 to 10.4.2 ([854eb5c4d](https://github.com/mozilla/fxa/commit/854eb5c4d))
- deps-dev: bump jest from 27.4.3 to 27.4.7 (#11551) ([43c4bdebd](https://github.com/mozilla/fxa/commit/43c4bdebd))

## 1.223.2

No changes.

## 1.223.1

No changes.

## 1.223.0

### Refactorings

- admin-panel, payments: Upgrade to react-router v6 (#11463) ([24bf98e99](https://github.com/mozilla/fxa/commit/24bf98e99))

### Other changes

- deps: bump express from 4.17.1 to 4.17.2 (#11509) ([e6433d1de](https://github.com/mozilla/fxa/commit/e6433d1de))
- deps: bump helmet from 4.6.0 to 5.0.0 (#11485) ([511acb701](https://github.com/mozilla/fxa/commit/511acb701))

## 1.222.0

### New features

- db: add emailTypeId column to emailBounces, start recording templates on bounces, display in admin panel ([12affe682](https://github.com/mozilla/fxa/commit/12affe682))

### Other changes

- deps-dev: bump ts-jest from 27.0.7 to 27.1.2 (#11386) ([fd027535e](https://github.com/mozilla/fxa/commit/fd027535e))
- deps: bump serve-static from 1.14.1 to 1.14.2 (#11384) ([6fa22e726](https://github.com/mozilla/fxa/commit/6fa22e726))
- admin-panel: remove unused scss files, scss dependencies since we use tailwind now ([c931b2041](https://github.com/mozilla/fxa/commit/c931b2041))
- deps: bump body-parser from 1.19.0 to 1.19.1 ([99506953e](https://github.com/mozilla/fxa/commit/99506953e))
- deps: bump @emotion/react from 11.6.0 to 11.7.1 (#11306) ([04d69c697](https://github.com/mozilla/fxa/commit/04d69c697))
- deps-dev: bump @testing-library/jest-dom from 5.15.1 to 5.16.1 ([7d4cf059d](https://github.com/mozilla/fxa/commit/7d4cf059d))

## 1.221.3

No changes.

## 1.221.2

No changes.

## 1.221.1

No changes.

## 1.221.0

### New features

- admin-panel: account history table styles not working (#11194) ([08ac45fed](https://github.com/mozilla/fxa/commit/08ac45fed))
- admin-panel: convert Account component to Tailwind classes (#11189) ([17e085806](https://github.com/mozilla/fxa/commit/17e085806))
- admin-panel: replace majority of admin-panel with tailwind styles (#11135) ([bc5ee92fc](https://github.com/mozilla/fxa/commit/bc5ee92fc))

### Bug fixes

- reverse dep rollback from conflict resolution ([5527014cb](https://github.com/mozilla/fxa/commit/5527014cb))

### Other changes

- deps: bump node-sass from 6.0.1 to 7.0.0 ([c7b00d176](https://github.com/mozilla/fxa/commit/c7b00d176))
- deps-dev: bump esbuild from 0.14.1 to 0.14.2 ([b02bdf11f](https://github.com/mozilla/fxa/commit/b02bdf11f))
- deps-dev: bump jest from 27.3.1 to 27.4.3 ([5bc98e34d](https://github.com/mozilla/fxa/commit/5bc98e34d))
- #11211: 2fedcbc4a Train 220 (#11211) ([2fedcbc4a](https://github.com/mozilla/fxa/commit/2fedcbc4a))
- deps-dev: bump esbuild-register from 3.1.2 to 3.2.0 (#11218) ([a66e94841](https://github.com/mozilla/fxa/commit/a66e94841))
- deps-dev: bump esbuild from 0.13.14 to 0.14.0 (#11186) ([fd2d059eb](https://github.com/mozilla/fxa/commit/fd2d059eb))
- deps-dev: bump @testing-library/dom from 8.9.0 to 8.11.1 (#11178) ([bc7066e5f](https://github.com/mozilla/fxa/commit/bc7066e5f))
- deps-dev: bump jest-watch-typeahead from 0.6.5 to 1.0.0" (#11148) ([06cea5b97](https://github.com/mozilla/fxa/commit/06cea5b97))
- deps-dev: bump @testing-library/jest-dom from 5.15.0 to 5.15.1 (#11145) ([00f2cf587](https://github.com/mozilla/fxa/commit/00f2cf587))

## 1.220.5

No changes.

## 1.220.4

No changes.

## 1.220.3

No changes.

## 1.220.2

No changes.

## 1.220.1

No changes.

## 1.220.0

### Refactorings

- admin: use autogenerated ts types (#11058) ([ea3d394e2](https://github.com/mozilla/fxa/commit/ea3d394e2))

### Other changes

- deps-dev: bump jest-watch-typeahead from 0.6.5 to 1.0.0 (#11123) ([a7460d79d](https://github.com/mozilla/fxa/commit/a7460d79d))
- ci: slow down pm2 startup (#11084) ([a62532cc5](https://github.com/mozilla/fxa/commit/a62532cc5))
- deps: update typescript to 4.5.2 ([60ca05cb8](https://github.com/mozilla/fxa/commit/60ca05cb8))
- deps: Update yarn to 3.1.0 and dedupe deps. fix resolve conflicts (#11072) ([c72a1a003](https://github.com/mozilla/fxa/commit/c72a1a003))
- deps-dev: bump esbuild from 0.13.4 to 0.13.14 (#11053) ([46b813268](https://github.com/mozilla/fxa/commit/46b813268))
- deps-dev: bump jest-watch-typeahead from 0.6.5 to 1.0.0 (#10961)" (#11045) ([4b6e42e95](https://github.com/mozilla/fxa/commit/4b6e42e95))
- deps: bump @emotion/react from 11.5.0 to 11.6.0 (#11021) ([f3e071306](https://github.com/mozilla/fxa/commit/f3e071306))

## 1.219.5

No changes.

## 1.219.4

No changes.

## 1.219.3

No changes.

## 1.219.2

No changes.

## 1.219.1

No changes.

## 1.219.0

### Other changes

- deps-dev: bump jest-watch-typeahead from 0.6.5 to 1.0.0 (#10961) ([54b697535](https://github.com/mozilla/fxa/commit/54b697535))

## 1.218.9

No changes.

## 1.218.8

No changes.

## 1.218.7

No changes.

## 1.218.6

No changes.

## 1.218.5

### Other changes

- deps-dev: bump @testing-library/jest-dom from 5.14.1 to 5.15.0 (#10899) ([d9798a2f2](https://github.com/mozilla/fxa/commit/d9798a2f2))
- deps: Update storybook packages to fix error ([9e0d99ed0](https://github.com/mozilla/fxa/commit/9e0d99ed0))
- deps: bump express-http-proxy from 1.6.2 to 1.6.3 (#10842) ([076e63f8b](https://github.com/mozilla/fxa/commit/076e63f8b))

## 1.218.4

No changes.

## 1.218.3

No changes.

## 1.218.2

No changes.

## 1.218.1

No changes.

## 1.218.0

### Bug fixes

- project: update other deps so we can update to jest 27.3.1 ([a3716198c](https://github.com/mozilla/fxa/commit/a3716198c))

### Other changes

- deps-dev: bump @tailwindcss/postcss7-compat from 2.2.16 to 2.2.17 (#10844) ([345847df9](https://github.com/mozilla/fxa/commit/345847df9))
- deps: bump convict from 6.2.0 to 6.2.1 ([ef7842bc0](https://github.com/mozilla/fxa/commit/ef7842bc0))
- deps-dev: bump @testing-library/user-event from 13.3.0 to 13.5.0 ([50ffaf06e](https://github.com/mozilla/fxa/commit/50ffaf06e))
- deps: bump @emotion/react from 11.4.1 to 11.5.0 (#10789) ([421db96a9](https://github.com/mozilla/fxa/commit/421db96a9))
- deps-dev: bump jest from 26.6.0 to 27.3.1 ([6b6a68853](https://github.com/mozilla/fxa/commit/6b6a68853))
- deps-dev: bump @storybook/addon-links from 6.3.10 to 6.3.12 ([bf11b4aef](https://github.com/mozilla/fxa/commit/bf11b4aef))
- deps-dev: bump @storybook/react from 6.3.10 to 6.3.11 ([16af0e483](https://github.com/mozilla/fxa/commit/16af0e483))
- deps-dev: bump @testing-library/user-event from 13.2.1 to 13.3.0 ([e75bb61c9](https://github.com/mozilla/fxa/commit/e75bb61c9))
- deps-dev: bump @testing-library/dom from 8.7.2 to 8.9.0 ([9c6005fc9](https://github.com/mozilla/fxa/commit/9c6005fc9))

## 1.217.2

No changes.

## 1.217.1

No changes.

## 1.217.0

### Refactorings

- build: use esbuild instead of ts-node (#10639) ([a95f1270a](https://github.com/mozilla/fxa/commit/a95f1270a))

### Other changes

- deps-dev: bump @typescript-eslint/eslint-plugin from 4.31.2 to 5.0.0 (#10690) ([aa63c6e58](https://github.com/mozilla/fxa/commit/aa63c6e58))
- deps-dev: bump @storybook/addon-actions from 6.3.10 to 6.3.11 (#10687) ([7edf08edd](https://github.com/mozilla/fxa/commit/7edf08edd))
- deps-dev: bump @typescript-eslint/parser from 4.33.0 to 5.0.0 ([14435a9a1](https://github.com/mozilla/fxa/commit/14435a9a1))
- deps-dev: bump @typescript-eslint/parser from 4.31.2 to 4.33.0 (#10642) ([3f65ae1da](https://github.com/mozilla/fxa/commit/3f65ae1da))
- deps: updated dependencies (#10638) ([f57031d15](https://github.com/mozilla/fxa/commit/f57031d15))
- deps-dev: bump @testing-library/dom from 8.2.0 to 8.7.2 ([677e4b381](https://github.com/mozilla/fxa/commit/677e4b381))
- deps-dev: bump @storybook/addon-links from 6.3.8 to 6.3.9 ([9fdb14b7a](https://github.com/mozilla/fxa/commit/9fdb14b7a))
- deps: bump graphql from 15.5.2 to 15.6.1 ([c6a80d028](https://github.com/mozilla/fxa/commit/c6a80d028))
- deps-dev: bump @tailwindcss/postcss7-compat from 2.2.14 to 2.2.16 ([7a76f658b](https://github.com/mozilla/fxa/commit/7a76f658b))
- deps-dev: bump @testing-library/react from 12.1.1 to 12.1.2 (#10595) ([4a89d0d8e](https://github.com/mozilla/fxa/commit/4a89d0d8e))

## 1.216.3

No changes.

## 1.216.2

No changes.

## 1.216.1

No changes.

## 1.216.0

### Other changes

- deps: update pm2; dedupe (#10557) ([89e549a74](https://github.com/mozilla/fxa/commit/89e549a74))
- deps-dev: bump @testing-library/react from 12.0.0 to 12.1.1 (#10548) ([cb9e59ddb](https://github.com/mozilla/fxa/commit/cb9e59ddb))
- deps-dev: bump @typescript-eslint/eslint-plugin ([d372a84fa](https://github.com/mozilla/fxa/commit/d372a84fa))
- deps-dev: bump @typescript-eslint/parser from 4.29.3 to 4.31.2 ([5a19c2332](https://github.com/mozilla/fxa/commit/5a19c2332))

## 1.215.2

No changes.

## 1.215.1

No changes.

## 1.215.0

### Other changes

- deps-dev: bump @storybook/addon-actions from 6.3.7 to 6.3.8 ([d03f02906](https://github.com/mozilla/fxa/commit/d03f02906))
- deps-dev: bump @storybook/react from 6.3.6 to 6.3.8 ([008946e6e](https://github.com/mozilla/fxa/commit/008946e6e))
- deps-dev: bump @tailwindcss/postcss7-compat from 2.2.10 to 2.2.14 ([e3dc86b4f](https://github.com/mozilla/fxa/commit/e3dc86b4f))
- deps-dev: bump @tailwindcss/postcss7-compat from 2.2.7 to 2.2.10 ([0045fd38d](https://github.com/mozilla/fxa/commit/0045fd38d))
- deps-dev: bump @storybook/addon-links from 6.3.7 to 6.3.8 ([c4f3d04a0](https://github.com/mozilla/fxa/commit/c4f3d04a0))
- deps: bump react-router-dom from 5.2.0 to 5.3.0 ([f52f03823](https://github.com/mozilla/fxa/commit/f52f03823))
- deps-dev: bump chance from 1.1.7 to 1.1.8 ([93c025b02](https://github.com/mozilla/fxa/commit/93c025b02))

## 1.214.1

No changes.

## 1.214.0

### Other changes

- deps: bump graphql from 15.5.1 to 15.5.2 ([6800d12fd](https://github.com/mozilla/fxa/commit/6800d12fd))
- deps-dev: bump @testing-library/dom from 8.1.0 to 8.2.0 ([c87889699](https://github.com/mozilla/fxa/commit/c87889699))
- deps-dev: bump @typescript-eslint/eslint-plugin ([e485e72e0](https://github.com/mozilla/fxa/commit/e485e72e0))
- deps-dev: bump @typescript-eslint/parser from 4.29.0 to 4.29.3 ([918c215c2](https://github.com/mozilla/fxa/commit/918c215c2))

## 1.213.11

No changes.

## 1.213.10

No changes.

## 1.213.9

No changes.

## 1.213.8

No changes.

## 1.213.7

No changes.

## 1.213.6

No changes.

## 1.213.5

No changes.

## 1.213.4

No changes.

## 1.213.3

No changes.

## 1.213.2

No changes.

## 1.213.1

No changes.

## 1.213.0

### Other changes

- deps-dev: bump supertest from 6.1.5 to 6.1.6 ([ff94f17b8](https://github.com/mozilla/fxa/commit/ff94f17b8))
- deps-dev: bump @typescript-eslint/eslint-plugin ([c61eaf8f4](https://github.com/mozilla/fxa/commit/c61eaf8f4))
- admin: disable flaky tests ([a75d2a1ac](https://github.com/mozilla/fxa/commit/a75d2a1ac))
- deps-dev: bump @storybook/addon-links from 6.3.6 to 6.3.7 ([ad6033217](https://github.com/mozilla/fxa/commit/ad6033217))
- deps-dev: bump supertest from 6.1.4 to 6.1.5 ([caa294dab](https://github.com/mozilla/fxa/commit/caa294dab))
- deps-dev: bump @storybook/addon-actions from 6.3.6 to 6.3.7 ([9ac01e6af](https://github.com/mozilla/fxa/commit/9ac01e6af))
- deps: bump @emotion/react from 11.4.0 to 11.4.1 ([c469cf8a8](https://github.com/mozilla/fxa/commit/c469cf8a8))
- deps-dev: bump @typescript-eslint/parser from 4.28.5 to 4.29.0 ([3f1d1aaf9](https://github.com/mozilla/fxa/commit/3f1d1aaf9))

## 1.212.2

### Other changes

- admin: disable flaky tests ([3f8ec5a9e](https://github.com/mozilla/fxa/commit/3f8ec5a9e))

## 1.212.1

No changes.

## 1.212.0

### Other changes

- deps: updated base deps for train-212 ([8a391693f](https://github.com/mozilla/fxa/commit/8a391693f))
- deps: bump @apollo/client from 3.3.21 to 3.4.3 ([fe3765cc2](https://github.com/mozilla/fxa/commit/fe3765cc2))
- deps-dev: bump @typescript-eslint/eslint-plugin ([1b30dca0e](https://github.com/mozilla/fxa/commit/1b30dca0e))
- deps-dev: bump @testing-library/user-event from 13.1.9 to 13.2.1 ([ed9417f71](https://github.com/mozilla/fxa/commit/ed9417f71))
- deps: bump convict from 6.1.0 to 6.2.0 ([99be156b7](https://github.com/mozilla/fxa/commit/99be156b7))
- deps-dev: bump @storybook/addon-links from 6.3.4 to 6.3.6 ([ade89c42e](https://github.com/mozilla/fxa/commit/ade89c42e))
- deps: bump convict-format-with-moment from 6.0.1 to 6.2.0 ([27490228a](https://github.com/mozilla/fxa/commit/27490228a))
- deps: updated yarn to 3.0 and typescript to 4.3.5 ([b8a6bd51c](https://github.com/mozilla/fxa/commit/b8a6bd51c))
- deps-dev: bump @tailwindcss/postcss7-compat from 2.1.2 to 2.2.7 ([14af04ad8](https://github.com/mozilla/fxa/commit/14af04ad8))
- deps-dev: bump @typescript-eslint/parser from 4.28.4 to 4.28.5 ([289edb45d](https://github.com/mozilla/fxa/commit/289edb45d))
- deps-dev: bump @storybook/react from 6.3.4 to 6.3.5 ([53152eb7b](https://github.com/mozilla/fxa/commit/53152eb7b))
- deps-dev: bump @storybook/addon-actions from 6.3.4 to 6.3.5 ([0b0c5e4d9](https://github.com/mozilla/fxa/commit/0b0c5e4d9))
- deps-dev: bump @typescript-eslint/parser from 4.28.0 to 4.28.4 ([da5d4da2c](https://github.com/mozilla/fxa/commit/da5d4da2c))
- deps-dev: bump supertest from 6.1.3 to 6.1.4 ([3316a6112](https://github.com/mozilla/fxa/commit/3316a6112))

## 1.211.2

No changes.

## 1.211.1

No changes.

## 1.211.0

### Other changes

- deps: bump convict-format-with-validator from 6.0.1 to 6.2.0 ([a43649dcb](https://github.com/mozilla/fxa/commit/a43649dcb))
- deps-dev: bump @storybook/addon-links from 6.3.0 to 6.3.4 ([b90d5f493](https://github.com/mozilla/fxa/commit/b90d5f493))
- deps: bump @apollo/client from 3.3.20 to 3.3.21 ([b3cb0fa99](https://github.com/mozilla/fxa/commit/b3cb0fa99))
- deps-dev: bump @testing-library/dom from 8.0.0 to 8.1.0 ([bda707ed5](https://github.com/mozilla/fxa/commit/bda707ed5))
- deps-dev: bump @storybook/react from 6.3.0 to 6.3.4 ([f0a342ae8](https://github.com/mozilla/fxa/commit/f0a342ae8))
- deps-dev: bump @storybook/addon-actions from 6.3.0 to 6.3.4 ([2b36e6504](https://github.com/mozilla/fxa/commit/2b36e6504))

## 1.210.3

No changes.

## 1.210.2

No changes.

## 1.210.1

No changes.

## 1.210.0

### Other changes

- deps-dev: bump @testing-library/react from 11.2.7 to 12.0.0 ([2206b080b](https://github.com/mozilla/fxa/commit/2206b080b))
- deps-dev: bump @testing-library/dom from 7.31.2 to 8.0.0 ([e43580c19](https://github.com/mozilla/fxa/commit/e43580c19))
- deps-dev: bump @typescript-eslint/parser from 4.27.0 to 4.28.0 ([62b42451c](https://github.com/mozilla/fxa/commit/62b42451c))

## 1.209.1

No changes.

## 1.209.0

### New features

- admin: disable account ([4c995b603](https://github.com/mozilla/fxa/commit/4c995b603))

### Other changes

- deps: update some deps ([b89dc6079](https://github.com/mozilla/fxa/commit/b89dc6079))
- deps: update deps and start ignoring @types/\* in dependabot ([694ff5f6a](https://github.com/mozilla/fxa/commit/694ff5f6a))
- deps: bump graphql from 15.5.0 to 15.5.1 ([990030034](https://github.com/mozilla/fxa/commit/990030034))
- deps-dev: bump @typescript-eslint/eslint-plugin ([f1d7f7c92](https://github.com/mozilla/fxa/commit/f1d7f7c92))
- deps-dev: bump @testing-library/dom from 7.31.0 to 7.31.2 ([e002ca1de](https://github.com/mozilla/fxa/commit/e002ca1de))
- deps-dev: bump @typescript-eslint/parser from 4.25.0 to 4.27.0 ([f004893ef](https://github.com/mozilla/fxa/commit/f004893ef))
- deps: update pm2 / dedupe ([5d7653fa6](https://github.com/mozilla/fxa/commit/5d7653fa6))
- deps-dev: bump @types/jsdom from 16.2.10 to 16.2.11 ([2f54deeac](https://github.com/mozilla/fxa/commit/2f54deeac))
- deps-dev: bump @testing-library/jest-dom from 5.13.0 to 5.14.1 ([45eebfcaa](https://github.com/mozilla/fxa/commit/45eebfcaa))
- deps-dev: bump @typescript-eslint/eslint-plugin ([07bac17e8](https://github.com/mozilla/fxa/commit/07bac17e8))
- deps-dev: bump @testing-library/jest-dom from 5.12.0 to 5.13.0 ([2ba48b1dc](https://github.com/mozilla/fxa/commit/2ba48b1dc))

## 1.208.4

No changes.

## 1.208.3

No changes.

## 1.208.2

No changes.

## 1.208.1

No changes.

## 1.208.0

### Other changes

- deps: updated some deps ([fa895572c](https://github.com/mozilla/fxa/commit/fa895572c))
- deps: updated pm2 ([34704ba14](https://github.com/mozilla/fxa/commit/34704ba14))
- deps-dev: bump @types/eslint from 7.2.11 to 7.2.13 ([01c70484e](https://github.com/mozilla/fxa/commit/01c70484e))
- admin: remove unnecessary columns from admin panel queries ([0c65675bf](https://github.com/mozilla/fxa/commit/0c65675bf))
- deps-dev: bump @typescript-eslint/eslint-plugin ([e99484693](https://github.com/mozilla/fxa/commit/e99484693))
- deps-dev: bump @types/express from 4.17.11 to 4.17.12 ([08dc9b8e1](https://github.com/mozilla/fxa/commit/08dc9b8e1))
- deps: bump @emotion/react from 11.1.5 to 11.4.0 ([986562f22](https://github.com/mozilla/fxa/commit/986562f22))
- deps: updated knex ([e02c6720e](https://github.com/mozilla/fxa/commit/e02c6720e))

## 1.207.1

No changes.

## 1.207.0

### New features

- admin: capstone admin panel enhancements ([1be2c7dca](https://github.com/mozilla/fxa/commit/1be2c7dca))

### Other changes

- deps: update some deps ([6fce48032](https://github.com/mozilla/fxa/commit/6fce48032))
- deps: added "yarn outdated" plugin + updated some deps ([952e4f388](https://github.com/mozilla/fxa/commit/952e4f388))
- deps-dev: bump @types/eslint from 7.2.10 to 7.2.11 ([816ef7b17](https://github.com/mozilla/fxa/commit/816ef7b17))
- deps: bump node-sass from 4.14.1 to 6.0.0 ([bfe77574f](https://github.com/mozilla/fxa/commit/bfe77574f))
- deps-dev: bump @types/jsdom from 12.2.4 to 16.2.10 ([df3847381](https://github.com/mozilla/fxa/commit/df3847381))
- deps-dev: bump @typescript-eslint/parser from 4.22.1 to 4.24.0 ([2693343d2](https://github.com/mozilla/fxa/commit/2693343d2))
- deps-dev: bump @testing-library/react from 11.2.6 to 11.2.7 ([29586f6a4](https://github.com/mozilla/fxa/commit/29586f6a4))
- deps: bump helmet from 4.5.0 to 4.6.0 ([e15ce79fd](https://github.com/mozilla/fxa/commit/e15ce79fd))

## 1.206.1

No changes.

## 1.206.0

### Other changes

- deps-dev: bump @types/jest from 26.0.22 to 26.0.23 ([8b9c2f364](https://github.com/mozilla/fxa/commit/8b9c2f364))
- deps: bump mozlog from 3.0.1 to 3.0.2 ([f46bd3472](https://github.com/mozilla/fxa/commit/f46bd3472))
- deps-dev: bump ts-jest from 26.5.5 to 26.5.6 ([2680b5840](https://github.com/mozilla/fxa/commit/2680b5840))
- deps: update typescript to v4 ([2e9ff2e14](https://github.com/mozilla/fxa/commit/2e9ff2e14))
- deps: bump @apollo/client from 3.3.15 to 3.3.16 ([9b4ea3450](https://github.com/mozilla/fxa/commit/9b4ea3450))
- deps: update react-scripts to v4 ([477eddca4](https://github.com/mozilla/fxa/commit/477eddca4))
- deps: upgrade to Storybook v6 across all packages ([3b1e63318](https://github.com/mozilla/fxa/commit/3b1e63318))
- deps: updated pm2 ([0847e2545](https://github.com/mozilla/fxa/commit/0847e2545))
- deps: revert @storybook/addon-links to 5.3.19 ([690e35ca3](https://github.com/mozilla/fxa/commit/690e35ca3))
- deps-dev: bump @storybook/addon-links from 6.2.8 to 6.2.9 ([ece7c8584](https://github.com/mozilla/fxa/commit/ece7c8584))
- deps-dev: bump @tailwindcss/postcss7-compat from 2.1.1 to 2.1.2 ([c1648631a](https://github.com/mozilla/fxa/commit/c1648631a))

## 1.205.0

### New features

- admin: implement uid search on the admin panel ([3afcb57f8](https://github.com/mozilla/fxa/commit/3afcb57f8))

### Other changes

- deps: bump helmet from 4.4.1 to 4.5.0 ([485850809](https://github.com/mozilla/fxa/commit/485850809))
- deps-dev: bump @typescript-eslint/parser from 4.21.0 to 4.22.0 ([cc2e2e567](https://github.com/mozilla/fxa/commit/cc2e2e567))
- deps-dev: bump @types/react-router-dom from 5.1.5 to 5.1.7 ([4e9ede7f4](https://github.com/mozilla/fxa/commit/4e9ede7f4))
- deps-dev: bump @testing-library/user-event from 12.7.1 to 13.1.5 ([4046a9fd2](https://github.com/mozilla/fxa/commit/4046a9fd2))
- deps-dev: downgrade @storybook/addons from 6.2.9 to 5.3.19 ([a2316b02d](https://github.com/mozilla/fxa/commit/a2316b02d))
- deps-dev: bump @testing-library/jest-dom from 5.11.9 to 5.12.0 ([3caa873b8](https://github.com/mozilla/fxa/commit/3caa873b8))
- deps-dev: bump @storybook/addons from 5.3.21 to 6.2.9 ([8a2de2c7f](https://github.com/mozilla/fxa/commit/8a2de2c7f))
- deps-dev: bump @typescript-eslint/eslint-plugin ([486ff11c9](https://github.com/mozilla/fxa/commit/486ff11c9))
- deps-dev: bump @types/eslint from 7.2.9 to 7.2.10 ([3b4fac5b7](https://github.com/mozilla/fxa/commit/3b4fac5b7))
- deps-dev: bump @types/webpack from 4.41.26 to 5.28.0 ([3de8e4e46](https://github.com/mozilla/fxa/commit/3de8e4e46))
- deps-dev: bump @storybook/addon-links from 6.1.15 to 6.2.8 ([e3f565ca9](https://github.com/mozilla/fxa/commit/e3f565ca9))
- deps-dev: bump @tailwindcss/postcss7-compat from 2.0.1 to 2.1.0 ([3e0782d89](https://github.com/mozilla/fxa/commit/3e0782d89))
- deps: bump @apollo/client from 3.3.13 to 3.3.15 ([b4d6a9b8d](https://github.com/mozilla/fxa/commit/b4d6a9b8d))
- deps-dev: bump @storybook/preset-create-react-app ([123c6c7da](https://github.com/mozilla/fxa/commit/123c6c7da))
- deps-dev: bump ts-jest from 26.5.4 to 26.5.5 ([66ab577c0](https://github.com/mozilla/fxa/commit/66ab577c0))
- 1bb2ad6f6 Created the TOTP model in database/model/totp.model.ts ([1bb2ad6f6](https://github.com/mozilla/fxa/commit/1bb2ad6f6))

## 1.204.7

No changes.

## 1.204.6

No changes.

## 1.204.5

No changes.

## 1.204.4

No changes.

## 1.204.3

No changes.

## 1.204.2

No changes.

## 1.204.1

### Bug fixes

- release: Add changelog notes and bump version for 204 ([5b8356e11](https://github.com/mozilla/fxa/commit/5b8356e11))

## 1.204.0

### Other changes

- deps-dev: bump @types/eslint from 7.2.8 to 7.2.9 ([3cd72f7f6](https://github.com/mozilla/fxa/commit/3cd72f7f6))
- deps-dev: bump ts-jest from 26.4.3 to 26.5.4 ([dc136b213](https://github.com/mozilla/fxa/commit/dc136b213))
- deps-dev: bump @types/eslint from 7.2.7 to 7.2.8 ([41024e607](https://github.com/mozilla/fxa/commit/41024e607))

## 1.203.5

No changes.

## 1.203.4

No changes.

## 1.203.3

No changes.

## 1.203.2

No changes.

## 1.203.1

No changes.

## 1.203.0

### Other changes

- deps-dev: bump @types/babel\_\_core from 7.1.12 to 7.1.14 ([23df842af](https://github.com/mozilla/fxa/commit/23df842af))
- deps: update convict ([52e626866](https://github.com/mozilla/fxa/commit/52e626866))
- deps-dev: bump @rescripts/cli from 0.0.15 to 0.0.16 ([c54667d92](https://github.com/mozilla/fxa/commit/c54667d92))
- deps-dev: bump @storybook/react from 5.3.19 to 6.1.21 ([37522c5a6](https://github.com/mozilla/fxa/commit/37522c5a6))
- deps-dev: bump @types/eslint from 6.8.1 to 7.2.7 ([a94c89e25](https://github.com/mozilla/fxa/commit/a94c89e25))

## 1.202.3

No changes.

## 1.202.2

No changes.

## 1.202.1

No changes.

## 1.202.0

### Other changes

- deps: bump @types/convict from 5.2.1 to 5.2.2 ([afdfd3993](https://github.com/mozilla/fxa/commit/afdfd3993))
- deps-dev: bump @types/webpack from 4.41.16 to 4.41.26 ([2cb798d6c](https://github.com/mozilla/fxa/commit/2cb798d6c))

## 1.201.1

No changes.

## 1.201.0

### Other changes

- deps-dev: bump @testing-library/user-event from 12.6.0 to 12.7.1 ([7f04d1be9](https://github.com/mozilla/fxa/commit/7f04d1be9))
- settings: upload avatar directly to profile server ([fa32870cc](https://github.com/mozilla/fxa/commit/fa32870cc))
- deps-dev: bump supertest from 6.0.1 to 6.1.3 ([e7b4af55c](https://github.com/mozilla/fxa/commit/e7b4af55c))
- 14b1ac68b cleared the last console log statement ([14b1ac68b](https://github.com/mozilla/fxa/commit/14b1ac68b))
- bf2f5ea2b changed variable name to be consistent ([bf2f5ea2b](https://github.com/mozilla/fxa/commit/bf2f5ea2b))
- c82019882 final changes to autocomplete ([c82019882](https://github.com/mozilla/fxa/commit/c82019882))
- 9023649b6 fixed string type for state hook ([9023649b6](https://github.com/mozilla/fxa/commit/9023649b6))
- 39290d507 added type for value to resolve circle ci test ([39290d507](https://github.com/mozilla/fxa/commit/39290d507))
- aa71fee2b done autocomplete ([aa71fee2b](https://github.com/mozilla/fxa/commit/aa71fee2b))
- d117ff436 updated implementation of autocomplete to be completely based on info in backend ([d117ff436](https://github.com/mozilla/fxa/commit/d117ff436))
- 23ca9dca4 added query to return all emails in accountresolver.ts, added the gql commands to run query on account index: 23ca9dca4 added query to return all emails in accountresolver.ts, added the gql commands to run query on account index ([23ca9dca4](https://github.com/mozilla/fxa/commit/23ca9dca4))
- 26153e435 test ([26153e435](https://github.com/mozilla/fxa/commit/26153e435))
- 5e4a72e03 test to push to new branch ([5e4a72e03](https://github.com/mozilla/fxa/commit/5e4a72e03))
- 93e2decfe updated back-end server to add a query to fetch all emails ([93e2decfe](https://github.com/mozilla/fxa/commit/93e2decfe))
- bd38d41c5 added a drop-down that provides suggestions as users type emails currently based on a hardcoded dataset ([bd38d41c5](https://github.com/mozilla/fxa/commit/bd38d41c5))

## 1.200.0

### Other changes

- deps: bump graphql from 15.4.0 to 15.5.0 ([eae1a35dd0](https://github.com/mozilla/fxa/commit/eae1a35dd0))
- deps-dev: bump @types/jest from 24.9.1 to 26.0.20 ([78e246d9a3](https://github.com/mozilla/fxa/commit/78e246d9a3))
- deps-dev: bump @storybook/addon-links from 6.0.28 to 6.1.15 ([03fa0a58db](https://github.com/mozilla/fxa/commit/03fa0a58db))
- deps: bump @apollo/client from 3.3.6 to 3.3.7 ([d34d6c68cb](https://github.com/mozilla/fxa/commit/d34d6c68cb))

## 1.199.0

### Other changes

- deps-dev: bump @testing-library/jest-dom from 5.11.0 to 5.11.9 ([d0f1f6301](https://github.com/mozilla/fxa/commit/d0f1f6301))
- deps: bump helmet from 4.1.1 to 4.4.1 ([81cc8d6fb](https://github.com/mozilla/fxa/commit/81cc8d6fb))

## 1.198.2

No changes.

## 1.198.1

### Other changes

- 4e70b3f04 merge main->train-198 ([4e70b3f04](https://github.com/mozilla/fxa/commit/4e70b3f04))

## 1.198.0

### Other changes

- deps-dev: bump @testing-library/user-event from 12.1.7 to 12.6.0 ([19422c122](https://github.com/mozilla/fxa/commit/19422c122))
- deps: update eslint to v7 ([7cf502be2](https://github.com/mozilla/fxa/commit/7cf502be2))
- deps: bump graphql from 14.6.0 to 15.4.0 ([d28e79655](https://github.com/mozilla/fxa/commit/d28e79655))

## 1.197.3

No changes.

## 1.197.2

No changes.

## 1.197.1

No changes.

## 1.197.0

### Other changes

- cbcbbe500 Added a simple window.alert to indicate that the functions of the Danger Zone buttons are not implemented yet. ([cbcbbe500](https://github.com/mozilla/fxa/commit/cbcbbe500))
- deps-dev: bump @typescript-eslint/eslint-plugin ([eae68b7b7](https://github.com/mozilla/fxa/commit/eae68b7b7))
- deps-dev: bump @storybook/preset-create-react-app ([3560cca17](https://github.com/mozilla/fxa/commit/3560cca17))
- deps-dev: bump @rescripts/cli from 0.0.14 to 0.0.15 ([49312d918](https://github.com/mozilla/fxa/commit/49312d918))
- 121c981ad Removed the AccountSearch/DangerZone folder since there was no code there. ([121c981ad](https://github.com/mozilla/fxa/commit/121c981ad))
- fa78cc8a4 Made changes to the admin panel danger zone UI under Account Search. ([fa78cc8a4](https://github.com/mozilla/fxa/commit/fa78cc8a4))
- ce011336e Added some danger zone UI changes. ([ce011336e](https://github.com/mozilla/fxa/commit/ce011336e))
- 221e6d9fd Adding placeholder lines - exploring the creation of the danger zone UI. ([221e6d9fd](https://github.com/mozilla/fxa/commit/221e6d9fd))

## 1.196.0

### Other changes

- deps-dev: bump @types/chance from 1.1.0 to 1.1.1 ([3938b8484](https://github.com/mozilla/fxa/commit/3938b8484))
- dep: update tailwindcss to version 2 ([ec97cb07c](https://github.com/mozilla/fxa/commit/ec97cb07c))
- deps: bump dateformat from 3.0.3 to 4.3.1 ([9c318e80e](https://github.com/mozilla/fxa/commit/9c318e80e))
- deps-dev: bump supertest from 4.0.2 to 6.0.1 ([1a7f42dd0](https://github.com/mozilla/fxa/commit/1a7f42dd0))
- deps-dev: bump @types/babel\_\_core from 7.1.7 to 7.1.12 ([a834dab3a](https://github.com/mozilla/fxa/commit/a834dab3a))

## 1.195.4

No changes.

## 1.195.3

No changes.

## 1.195.2

No changes.

## 1.195.1

No changes.

## 1.195.0

No changes.

## 1.194.0

### Other changes

- 947647648 Resolving issue #6746 ([947647648](https://github.com/mozilla/fxa/commit/947647648))

## 1.193.1

No changes.

## 1.193.0

### Bug fixes

- admin-panel: fix updated type incompatibility ([0dacbca70](https://github.com/mozilla/fxa/commit/0dacbca70))

### Other changes

- deps-dev: bump @storybook/addon-links from 5.3.19 to 6.0.28 ([e61e65f45](https://github.com/mozilla/fxa/commit/e61e65f45))
- deps: update node version to 14 ([6c2b253c1](https://github.com/mozilla/fxa/commit/6c2b253c1))
- deps-dev: bump @types/helmet from 0.0.48 to 4.0.0 ([96dfc9aff](https://github.com/mozilla/fxa/commit/96dfc9aff))

## 1.192.0

### Other changes

- deps-dev: bump @types/react from 16.9.35 to 16.9.53 ([3c3f0b16d](https://github.com/mozilla/fxa/commit/3c3f0b16d))
- deps-dev: bump tailwindcss from 1.7.3 to 1.9.1 ([7db53da21](https://github.com/mozilla/fxa/commit/7db53da21))
- deps-dev: bump @testing-library/user-event from 7.2.1 to 12.1.7 ([a916aef03](https://github.com/mozilla/fxa/commit/a916aef03))

## 1.191.1

No changes.

## 1.191.0

### Bug fixes

- admin-panel: Fix connection to admin server in dev, remove unneeded Apollo dependencies, update README ([54925c489](https://github.com/mozilla/fxa/commit/54925c489))

### Other changes

- deps-dev: bump @testing-library/dom from 6.16.0 to 7.24.5 ([b61199ad2](https://github.com/mozilla/fxa/commit/b61199ad2))

## 1.190.1

No changes.

## 1.190.0

No changes.

## 1.189.1

No changes.

## 1.189.0

### Other changes

- deps: bump express-http-proxy from 1.6.0 to 1.6.2 ([8d5553163](https://github.com/mozilla/fxa/commit/8d5553163))
- deps: update mozlog ([a68310952](https://github.com/mozilla/fxa/commit/a68310952))
- deps: fixed yarn dependency warnings ([b32addf86](https://github.com/mozilla/fxa/commit/b32addf86))
- monorepo: move deps to correct sub-packages ([a8cc232b9](https://github.com/mozilla/fxa/commit/a8cc232b9))

## 1.188.1

No changes.

## 1.188.0

### Other changes

- deps-dev: bump jest from 24.9.0 to 26.4.2 ([fad65917c](https://github.com/mozilla/fxa/commit/fad65917c))

## 1.187.3

No changes.

## 1.187.2

No changes.

## 1.187.1

No changes.

## 1.187.0

### Bug fixes

- admin-panel: stop using helmet.xssFilter because we don't want its default value; disable hsts force ([c8d20c5ac](https://github.com/mozilla/fxa/commit/c8d20c5ac))

### Other changes

- deps: bump helmet from 3.23.3 to 4.1.0 ([c0631ebc6](https://github.com/mozilla/fxa/commit/c0631ebc6))
- deps-dev: bump @types/serve-static from 1.13.3 to 1.13.5 ([4b4495f1c](https://github.com/mozilla/fxa/commit/4b4495f1c))

## 1.186.2

No changes.

## 1.186.1

No changes.

## 1.186.0

### New features

- settings: Add avatar drop down component ([faa5f8c56](https://github.com/mozilla/fxa/commit/faa5f8c56))

### Bug fixes

- release: fixes versioning and changelogs ([c81c76d15](https://github.com/mozilla/fxa/commit/c81c76d15))

### Other changes

- deps: update yarn version and root level deps ([da2e99729](https://github.com/mozilla/fxa/commit/da2e99729))

## 1.185.1
