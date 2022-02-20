---
title: Introduction
description: More Sass - the library of useful SCSS mixins and functions.
position: 0
fullscreen: true
---

<!-- ![More Sass logotype](/preview.png) -->

`more-sass` is the library of useful SCSS mixins and functions.

## Installation

<code-group>

  <code-block label="yarn" active>

  ```bash
  yarn add more-sass
  ```

  </code-block>

  <code-block label="npm">

  ```bash
  npm install more-sass
  ```

  </code-block>

</code-group>

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

<alert type="warning">
  Important! <br />
  More Sass needs the primary implementation of Sass (Dart Sass).
</alert>
