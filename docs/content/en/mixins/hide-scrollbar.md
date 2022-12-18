---
title: hide-scrollbar
description: More Sass - the library of useful SCSS mixins and functions.
position: 251
category: Mixins
fullscreen: true
---

Visually hides any scrollbar.

## Arguments

—

### Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .block {
  	@include more.hide-scrollbar;
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .block {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .block::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    appearance: none;
  }
  ```

  </code-block>

</code-group>
