---
title: 'Introduction'
description: 'More Sass - the library of useful SCSS mixins and functions.'
position: 0
fullscreen: true
---

![More Sass logotype](/static/preview.png)

The library of useful SCSS mixins and functions.

[![Build status](https://github.com/MorevM/more-sass/workflows/Build/badge.svg)](https://github.com/MorevM/more-sass/actions?query=workflow%3ABuild)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

<code-group>

<code-block label="yarn" active>
```bash
yarn add more-sass
```
</code-block>

<code-block label="npm">
```bash
npm install more-sass -P
```
</code-block>

</code-group>

## Usage

You can import the entire library or only the necessary part of it - variables, mixins, functions, or only a specific group of functions:

```scss
@use 'more-sass' as more; // import the entire library
@use 'more-sass/variables' as more-variables; // import only variables
@use 'more-sass/mixins' as more-mixins; // import only mixins
@use 'more-sass/functions' as more-functions; // import only functions
@use 'more-sass/functions/string' as more-string; // import only a specific group of functions
@use 'more-sass/functions/string/str-split' as *; // import a specific function in global namespace
```
