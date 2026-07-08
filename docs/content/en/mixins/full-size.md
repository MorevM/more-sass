---
title: full-size
description: More Sass - the library of useful SCSS mixins and functions.
position: 245
category: Mixins
fullscreen: true
---

Sets the element size to 100% of its parent size and makes it positioned absolutely.

<alert type="warning">Don't forget to set the parent `position` property other than `static`.</alert>

## Arguments

—

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
    @include more.full-size;
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    display: block flow;
    inline-size: 100%;
    block-size: 100%;
  }
  ```

  </code-block>

</code-group>
