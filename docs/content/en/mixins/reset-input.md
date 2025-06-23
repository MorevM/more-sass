---
title: reset-input
description: More Sass - the library of useful SCSS mixins and functions.
position: 285
category: Mixins
fullscreen: true
---

Resets default styles of `input` elements.

## Arguments

—

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  input {
    @include more.reset-input;
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  input {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    box-shadow: none;
    appearance: none;
  }
  ```

  </code-block>

</code-group>
