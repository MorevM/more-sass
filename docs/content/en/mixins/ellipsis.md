---
title: ellipsis
description: More Sass - the library of useful SCSS mixins and functions.
position: 235
category: Mixins
fullscreen: true
---

Truncates text of the current element and adds an ellipsis to represent overflow.

## Arguments

| Name       | Type     | Default | Description              |
|------------|----------|---------|--------------------------|
| $max-width | `number` | 100%    | The element width limit. |

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;
  
  .element {
    @include more.ellipsis;
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element {
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  ```

  </code-block>

</code-group>
