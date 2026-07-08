---
title: reset-button
description: More Sass - the library of useful SCSS mixins and functions.
position: 280
category: Mixins
fullscreen: true
---

Resets default styles of `button` elements.

## Arguments

—

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  button {
    @include more.reset-button;
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  button {
    inline-size: auto;
    margin: 0;
    padding: 0;
    color: currentColor;
    font: inherit;
    background: none;
    border: 0;
    box-shadow: none;
    appearance: none;
    user-select: none;
    -webkit-touch-callout: none;
    touch-action: manipulation;
  }
  ```

  </code-block>

</code-group>
