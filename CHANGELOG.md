

## [2.1.3](https://github.com/MorevM/more-sass/compare/v2.1.2...v2.1.3) (2025-06-24)

### Bug fixes

* **bem-modifiers:** Allow multiple root selectors ([de1a1c2](https://github.com/MorevM/more-sass/commit/de1a1c230b28fea486f061fc717f3c7680514144))
* **font:** Cast `font-family` to string before check ([36493df](https://github.com/MorevM/more-sass/commit/36493df5fe139b62b7433eab132a1a33d6ebe75a))
* Preserve brackets in `column` mixin for readability ([4a12c56](https://github.com/MorevM/more-sass/commit/4a12c5609e0f4bbcc21dff543ebefba3d85cc0ce))
* SASS color deprecation warnings ([bcb6e87](https://github.com/MorevM/more-sass/commit/bcb6e874e16f0048f6f046a69e65d6ff9dffc81c))


### [2.1.2](https://github.com/MorevM/more-sass/compare/v2.1.1...v2.1.2) (2023-01-30)


### Bug fixes

* Add `overflow: hidden` to `visually-hidden` mixin ([ee60fb0](https://github.com/MorevM/more-sass/commit/ee60fb07f1f8f702a9cf8e1a64460e9a0e634b0b))


### Chores

* Disable `dependabot` for `devDependencies` ([597efd6](https://github.com/MorevM/more-sass/commit/597efd6d3949b15f63837f0eb963f271d80dc02d))
* Upgrade devDeps ([2d33f55](https://github.com/MorevM/more-sass/commit/2d33f552eac2cd12b3a94c74d457e56102c25a79))

### [2.1.1](https://github.com/MorevM/more-sass/compare/v2.1.0...v2.1.1) (2022-12-18)


### Bug fixes

* Add a forgotten `hide-scrollbar` export (－‸ლ) ([a32b4da](https://github.com/MorevM/more-sass/commit/a32b4da3b28e858629fc9dcd3b1fc3b9867067ce))

## [2.1.0](https://github.com/MorevM/more-sass/compare/v2.0.1...v2.1.0) (2022-12-18)


### Features

* Add `hide-scrollbar` ([cf0a22b](https://github.com/MorevM/more-sass/commit/cf0a22b8bef6c2202cbbce1d21e2a9dbabb27d44))

### Bug fixes

* Fix for `color.mix` non-percent weight deprecation ([b7fc025](https://github.com/MorevM/more-sass/commit/b7fc02587461df8b7e5ec9cce03185aece165dbc))


### Documentation

* Document new `hide-scrollbar` mixin ([c7facd4](https://github.com/MorevM/more-sass/commit/c7facd49daf914f56673cd08e45c1b6cad563b8c))

### [2.0.1](https://github.com/MorevM/more-sass/compare/v2.0.0...v2.0.1) (2022-09-22)


### Bug fixes

* Correct `[@forward](https://github.com/forward)` statements after renaming ([bd71621](https://github.com/MorevM/more-sass/commit/bd71621658dce65dd65e66488def8536dd4a58a4))

## [2.0.0](https://github.com/MorevM/more-sass/compare/v1.2.1...v2.0.0) (2022-09-17)


### ⚠ BREAKING CHANGES

* Mixins `fluid-prop` and `fluid-font` was renamed to `use-fluid-prop` and `use-fluid-prop` respectively, since it's recommended to use them as high order mixin and those names are more convenient

### Chores

* bump @morev/eslint-config from 17.0.1 to 17.1.1 ([#85](https://github.com/MorevM/more-sass/issues/85)) ([74cab7c](https://github.com/MorevM/more-sass/commit/74cab7cce0e141abf106963a085648153ee30ddf))
* bump eslint from 8.23.0 to 8.23.1 ([#87](https://github.com/MorevM/more-sass/issues/87)) ([4739b32](https://github.com/MorevM/more-sass/commit/4739b32842d0223470a04452cfc2a1b021ef7293))
* bump jest from 29.0.2 to 29.0.3 ([#88](https://github.com/MorevM/more-sass/issues/88)) ([f990c05](https://github.com/MorevM/more-sass/commit/f990c051d66212083797435aa981341ee92a5504))
* bump release-it from 15.4.1 to 15.4.2 ([#86](https://github.com/MorevM/more-sass/issues/86)) ([6475a13](https://github.com/MorevM/more-sass/commit/6475a137109695d266aaecf1236caea5286c69ba))


### Refactoring

* Rename `fluid-prop` and `fluid-font` ([2656fa4](https://github.com/MorevM/more-sass/commit/2656fa487ef785fed56bd2c193ed1a64833d128e))


### Documentation

* Update to cover `fluid` mixins renaming ([d623b4f](https://github.com/MorevM/more-sass/commit/d623b4fcc829c59ef8c0ea9bdcd31f27f8dd7c10))

### [1.2.1](https://github.com/MorevM/more-sass/compare/v1.2.0...v1.2.1) (2022-09-10)


### Bug fixes

* **mixins:** Allow to use space-separated properties in `use-transition` ([cb65438](https://github.com/MorevM/more-sass/commit/cb6543847c0debe54d3ed719b66ca5c41410e88a))

## [1.2.0](https://github.com/MorevM/more-sass/compare/v1.1.1...v1.2.0) (2022-09-10)


### Features

* **functions:** Add `list-remove` function ([d7d89ee](https://github.com/MorevM/more-sass/commit/d7d89eebd56f620a299e7e3ffc361db3d45e582c))


### Bug fixes

* **docs:** Fix typo in category of Russian version of `use-transition` ([3314b0c](https://github.com/MorevM/more-sass/commit/3314b0ca29d81d686d7fbb83f81172349e59d408))
* **mixins:** Allow to pass `$properties` as `arglist` to `use-transition` ([9adbae3](https://github.com/MorevM/more-sass/commit/9adbae39fbbc4365d14efd772872d1f7d05f9013))


### Tests

* **mixins:** Add test as high order mixin for `use-transition` ([4490681](https://github.com/MorevM/more-sass/commit/4490681f5154665bad6781e9a99fbd5ee11ff7e0))


### Documentation

* **functions:** Add docs for `list-remove` function ([2dacf0d](https://github.com/MorevM/more-sass/commit/2dacf0db820e1bbbcbf893b0a31f90d0cd8cfd6f))
* **mixins:** Extend docs for `use-transition` as high order mixin ([83faa30](https://github.com/MorevM/more-sass/commit/83faa3032d92bf457731721df2d5d8533382cbe0))

### [1.1.1](https://github.com/MorevM/more-sass/compare/v1.1.0...v1.1.1) (2022-09-10)


### Bug fixes

* Add missed `@forward` statement for `use-transition` ([4da780b](https://github.com/MorevM/more-sass/commit/4da780b725f2a0bed2fd7efa8a46e76658952ef5))

## [1.1.0](https://github.com/MorevM/more-sass/compare/v1.0.8...v1.1.0) (2022-09-10)


### Features

* **mixins:** Add `use-transition` high order mixin ([7773dd9](https://github.com/MorevM/more-sass/commit/7773dd9845825b4964e3a7393267eabfb1a7381d))
* **mixins:** Allow to specify `z-index` value in `position` mixins family ([a1ce354](https://github.com/MorevM/more-sass/commit/a1ce354833ab8e27569df3e91975152fd67018b0))


### Chores

* bump @morev/eslint-config from 15.1.0 to 15.2.0 ([#67](https://github.com/MorevM/more-sass/issues/67)) ([fe5f5f9](https://github.com/MorevM/more-sass/commit/fe5f5f90514d57559bae1ac56c858cf3a46300b6))
* bump eslint from 8.20.0 to 8.21.0 ([#68](https://github.com/MorevM/more-sass/issues/68)) ([3d9e68a](https://github.com/MorevM/more-sass/commit/3d9e68a66b4c9ff7add7571111b48fed078afb1b))
* bump sass from 1.54.0 to 1.54.3 ([#66](https://github.com/MorevM/more-sass/issues/66)) ([e16015d](https://github.com/MorevM/more-sass/commit/e16015d25d69aea1fc6f49b0e780c67d3a15e379))
* bump sass from 1.54.8 to 1.54.9 ([3d7ec06](https://github.com/MorevM/more-sass/commit/3d7ec063927a45991f1b4d7565b935b39106d292))
* Deps update ([f25fd06](https://github.com/MorevM/more-sass/commit/f25fd060815bb83d9b74908d60dd3549e6985900))
* Disable `order/order` stylelint rule for lib ([d7e59d0](https://github.com/MorevM/more-sass/commit/d7e59d057e98f7d0d61aa4c60323bd881b65e50e))

### [1.0.8](https://github.com/MorevM/more-sass/compare/v1.0.7...v1.0.8) (2022-07-28)


### Chores

* bump @morev/eslint-config from 10.0.3 to 11.0.0 ([#9](https://github.com/MorevM/more-sass/issues/9)) ([c7bd73f](https://github.com/MorevM/more-sass/commit/c7bd73f34d06b1fceab4211134551d1f8dcfedc2))
* bump @morev/eslint-config from 11.0.0 to 11.1.1 ([#14](https://github.com/MorevM/more-sass/issues/14)) ([dc8d715](https://github.com/MorevM/more-sass/commit/dc8d7159ed6cb5f8910768a058273db4216d4a0c))
* bump @morev/stylelint-config from 1.0.2 to 1.0.3 ([#5](https://github.com/MorevM/more-sass/issues/5)) ([44398fc](https://github.com/MorevM/more-sass/commit/44398fc5c602630a0f24d0b137d7eb37234f7477))
* bump @release-it/conventional-changelog from 4.2.2 to 4.3.0 ([#13](https://github.com/MorevM/more-sass/issues/13)) ([0dc15fc](https://github.com/MorevM/more-sass/commit/0dc15fcaf827f4a9518779cfd59776b7a67e86d0))
* bump eslint from 8.12.0 to 8.13.0 ([#7](https://github.com/MorevM/more-sass/issues/7)) ([667dbe8](https://github.com/MorevM/more-sass/commit/667dbe85b816f7a470ba7856cf2ac9d439c9bdc8))
* bump eslint from 8.13.0 to 8.14.0 ([#17](https://github.com/MorevM/more-sass/issues/17)) ([5c16d2f](https://github.com/MorevM/more-sass/commit/5c16d2fa523b96a963f54db90fc2a1f37703807b))
* bump glob from 7.2.0 to 8.0.1 ([#15](https://github.com/MorevM/more-sass/issues/15)) ([6cb5fa3](https://github.com/MorevM/more-sass/commit/6cb5fa348a046395b1a63ca0f2d2789c99ab3f69))
* bump lint-staged from 12.3.7 to 12.3.8 ([#11](https://github.com/MorevM/more-sass/issues/11)) ([b77b95f](https://github.com/MorevM/more-sass/commit/b77b95f9001025916bb7d8ebd1fee6cfef4a6196))
* bump lint-staged from 12.3.8 to 12.4.0 ([#18](https://github.com/MorevM/more-sass/issues/18)) ([a78aa0c](https://github.com/MorevM/more-sass/commit/a78aa0cefcb6fca6670e103059b310cbf4819b2a))
* bump release-it from 14.13.1 to 14.14.0 ([#4](https://github.com/MorevM/more-sass/issues/4)) ([2a7321e](https://github.com/MorevM/more-sass/commit/2a7321e17a31dba70f34d5e579ed98f2668a8075))
* bump release-it from 14.14.0 to 14.14.2 ([#12](https://github.com/MorevM/more-sass/issues/12)) ([794ed8b](https://github.com/MorevM/more-sass/commit/794ed8bcc46946e03be92941ec33602ecee45f92))
* bump sass from 1.49.11 to 1.50.0 ([#8](https://github.com/MorevM/more-sass/issues/8)) ([e41777c](https://github.com/MorevM/more-sass/commit/e41777cfe101c9df54aa5212ba32d17babeefe86))
* bump sass from 1.49.9 to 1.49.11 ([#6](https://github.com/MorevM/more-sass/issues/6)) ([11334ed](https://github.com/MorevM/more-sass/commit/11334edb1ef635c013438089aeb2b3bd839a7450))
* bump sass from 1.50.0 to 1.50.1 ([#19](https://github.com/MorevM/more-sass/issues/19)) ([75fcef1](https://github.com/MorevM/more-sass/commit/75fcef1f7325a5ce0ef870b042dff88722547514))
* bump stylelint from 14.6.1 to 14.7.0 ([#10](https://github.com/MorevM/more-sass/issues/10)) ([9b61be9](https://github.com/MorevM/more-sass/commit/9b61be9136ae3e84d7c2a336d33190c04bfe84ec))
* bump stylelint from 14.7.0 to 14.7.1 ([#20](https://github.com/MorevM/more-sass/issues/20)) ([4e4d6e1](https://github.com/MorevM/more-sass/commit/4e4d6e1d15e23686346432729c214740c829fe35))
* Deps update ([24e36f0](https://github.com/MorevM/more-sass/commit/24e36f06968dfa4658cdc413c0fcb1da154e0660))


### Bug fixes

* Allow to use `bem-modifiers` with single argument ([fba33b3](https://github.com/MorevM/more-sass/commit/fba33b39806b7b9aca303bb084d92e1315b3f5f5))


### Tests

* Extend `bem-modifiers` test using call with single argument ([2be22e7](https://github.com/MorevM/more-sass/commit/2be22e7056c221eae0fcb713f2bdca50aa13f6fb))

### [1.0.7](https://github.com/MorevM/more-sass/compare/v1.0.6...v1.0.7) (2022-03-26)


### Bug fixes

* Fix documentation routing ([#3](https://github.com/MorevM/more-sass/issues/3)) ([a2c2fdf](https://github.com/MorevM/more-sass/commit/a2c2fdf982e3bbb1e3ef5d11b36f649b036d49ce))### [1.0.6](https://github.com/MorevM/more-sass/compare/v1.0.5...v1.0.6) (2022-03-26)


### Chores

* Add `dependabot` ([a795e04](https://github.com/MorevM/more-sass/commit/a795e0412813b5ec50257b4d1ea731db1d2fb8b2))
* Deps update ([9641523](https://github.com/MorevM/more-sass/commit/96415238a616398e944b227c37d50e4fa9e4aa1a))undefined

### [1.0.5](https://github.com/MorevM/more-sass/compare/v1.0.4...v1.0.5) (2022-02-27)


### Bug fixes

* **mixins:** Compound selectors in `parent-state` ([55c7db1](https://github.com/MorevM/more-sass/commit/55c7db10a3c2830ab6d9213dc51a04234deb9d55))


### Chores

* **deps:** All deps update ([b16619c](https://github.com/MorevM/more-sass/commit/b16619c8616e3ca717d9b2bdde4cdeb67c147b7c))### [1.0.4](https://github.com/MorevM/more-sass/compare/v1.0.3...v1.0.4) (2022-02-20)


### CI improvements

* Explicit `registry-url` in `release` workflow ([ac73f73](https://github.com/MorevM/more-sass/commit/ac73f733cae75e9ea3d9358aaebbee94a499a3ec))

### [1.0.3](https://github.com/MorevM/more-sass/compare/v1.0.2...v1.0.3) (2022-02-20)

### [1.0.2](https://github.com/MorevM/more-sass/compare/v1.0.1...v1.0.2) (2022-02-20)

### Documentation

* Change default locale to `en` ([d578b69](https://github.com/MorevM/more-sass/commit/d578b69d106af419ffaa1b96b687485d5b74de76))
* Review docs ([64605ee](https://github.com/MorevM/more-sass/commit/64605eebfde98e72fbba9e935275483d4d311822))


### Chores

* Add `CONTRIBUTING.md` ([d1732b4](https://github.com/MorevM/more-sass/commit/d1732b489cd442aecb76c5326cbc5f67c5c84631))
* Add `vscode-settings` hook ([0a4a7eb](https://github.com/MorevM/more-sass/commit/0a4a7ebce5d889b73b7f1b64b75a7d8404c01a48))
* Add actual `stylelint` configuration ([6ceba1b](https://github.com/MorevM/more-sass/commit/6ceba1b634652090a6e2852671b90337560f94de))
* Add better ISSUE_TEMPLATE's ([7b0a73a](https://github.com/MorevM/more-sass/commit/7b0a73a556928925c9505cb5e9c5aeaf773e8dd4))
* Add my best contributor ever ([be0a27f](https://github.com/MorevM/more-sass/commit/be0a27fef91ff58f95e7bcb8dcb546e28533d91c))
* Add shared `commitlint` configuration ([368c9ef](https://github.com/MorevM/more-sass/commit/368c9efd563de55a9b969e7ddc90999940219276))
* Add shared `eslint` configuration ([0021aec](https://github.com/MorevM/more-sass/commit/0021aecb1fbf5afbd1d0bec00b31cb25e0780cb4))
* Fix `stylelint` path ([a9ea81a](https://github.com/MorevM/more-sass/commit/a9ea81af3114badd4ed75dc9b6bf03899798daf0))
* Ignore scripts in docs folder ([8b7087c](https://github.com/MorevM/more-sass/commit/8b7087ceea0e186bc0cff1ec1d86fcd4e90938a0))
* Lint library files to fit configuration ([765efee](https://github.com/MorevM/more-sass/commit/765efeeba7d70eab01809a7418b2ef1aaf248f9f))
* Lint project files to fit `eslint-config` ([50e3237](https://github.com/MorevM/more-sass/commit/50e323726ba8f4fa5bbc0e62c7a37e6766172b64))
* Remove local release script in favor of using `release-it` ([c3e8b61](https://github.com/MorevM/more-sass/commit/c3e8b61c15b0d43bf8b88e96e96f33f4c91992ce))
* Update `.editorconfig` ([d5a136b](https://github.com/MorevM/more-sass/commit/d5a136b304f579497aee3bc0dbc1f7c8acb77337))
* Upgrade dependencies ([12eec38](https://github.com/MorevM/more-sass/commit/12eec38d35ce70b36f51464cdda4a9c878364ce1))
* Upgrade Stylelint ([656ae60](https://github.com/MorevM/more-sass/commit/656ae60b5008fd939a9af12a4e1358d02f60a78f))
* Use actual `stylelint` configuration ([510f103](https://github.com/MorevM/more-sass/commit/510f1030781769d620e45af3835e80944b305b00))


### CI improvements

* Add `build` step ([69c8bc0](https://github.com/MorevM/more-sass/commit/69c8bc021af3e5346118c31cadb07ee2bd89251f))
* Add `gh-pages` workflow ([29ec093](https://github.com/MorevM/more-sass/commit/29ec093432a08d8a957bd7f143af30808f53840e))
* Add `release` workflow ([716a4b3](https://github.com/MorevM/more-sass/commit/716a4b343da6be9acf3250212141be509a565347))
* Allow manual run of `docs` workflow ([8a5d542](https://github.com/MorevM/more-sass/commit/8a5d542109efc2097f90a6c26d4ede5aa847a5b8))
* Set `cache-dependency-path` to all workflows ([7f0d9e6](https://github.com/MorevM/more-sass/commit/7f0d9e6ea492c2176699a1fdffcb49ac221e87ee))
* Update `release` workflow ([1b899c8](https://github.com/MorevM/more-sass/commit/1b899c8160c9cf25ab959803d19e090f74e659bb))

## [1.0.1](https://github.com/MorevM/more-sass/compare/v1.0.0...v1.0.1) (2021-11-14)


### Bug Fixes

* Package contains only library files ([9694ead](https://github.com/MorevM/more-sass/commit/9694eade82e97b387aca5eed10fd30973e54d3bb))



# 1.0.0 (2021-11-01)


### Bug Fixes

* Export variables along with mixins and functions ([bed4416](https://github.com/MorevM/more-sass/commit/bed44163bda34e14f353f0d3451ef777ef15bf4d))
* Fix bem-modifiers mixin ([68143ae](https://github.com/MorevM/more-sass/commit/68143aea9ec2ed3226f99b6e3e241291c2b23d70))
* Fix box mixin ([e15c37c](https://github.com/MorevM/more-sass/commit/e15c37cb544b5f12db7d8eea6e3ccfc0fb5fde06))
* Fix fluid-font mixin ([4e8fb90](https://github.com/MorevM/more-sass/commit/4e8fb9069cdfe35460b1e176284229cca1a58e5b))
* Fix list-join function ([d7ec565](https://github.com/MorevM/more-sass/commit/d7ec5659abd7ac0c7f7881e9b8482c87671e61fe))
* Fix str-split function ([f2e8a2d](https://github.com/MorevM/more-sass/commit/f2e8a2d2975a4b4a15d6f796946a5a5eeee99cf4))
* Fix triangle mixin ([876519d](https://github.com/MorevM/more-sass/commit/876519d2019020200b52ed1a9d505e59766cd2a9))
* Some small fixes ([380c40f](https://github.com/MorevM/more-sass/commit/380c40fe0deee1ba8186f1377d04b97075400fbc))


### Features

* parent-state and bem-modifiers mixins ([615aa72](https://github.com/MorevM/more-sass/commit/615aa7286e41e4163d52e2a5b075002185ac68b6))
