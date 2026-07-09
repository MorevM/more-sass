---
title: Introduction
description: More Sass - the library of useful SCSS mixins and functions.
layout: docs
---

<!-- ![More Sass logotype](/preview.png) -->

`more-sass` is the library of useful SCSS mixins and functions.

## Installation

::code-group

  ```sh [yarn]
  yarn add more-sass
  ```

  ```sh [npm]
  npm install more-sass
  ```

::

## Usage

You can import the entire library or only the necessary part of it - variables, mixins, functions, or only a specific group of functions:

```scss
// Import the entire library
@use 'more-sass' as more;

// Import variables
@use 'more-sass/variables' as more-variables;

// Import mixins
@use 'more-sass/mixins' as more-mixins;

// Import functions
@use 'more-sass/functions' as more-functions;

// Import a specific group of functions
@use 'more-sass/functions/string' as more-string;

// Import a specific function in global namespace
@use 'more-sass/functions/string/str-split' as *;
```
