---
title: triangle
description: More Sass - the library of useful SCSS mixins and functions.
position: 295
category: Mixins
fullscreen: true
---

Draws a triangle from the current element.

## Arguments

| Name                                             | Type     | Default        | Description                                    |
| ------------------------------------------------ | -------- | -------------- | ---------------------------------------------- |
| $inline-size <span class="text-red-600">*</span> | `number` | —              | Triangle inline size.                          |
| $block-size <span class="text-red-600">*</span>  | `number` | —              | Triangle block size.                           |
| $direction <span class="text-red-600">*</span>   | `string` | —              | The keyword describing the triangle direction. |
| $color                                           | `color`  | `currentColor` | Triangle color.                                |

<alert type="info">

  List of direction keywords:

  | Keyword        | Figure |
  | -------------- | ------ |
  | `top`          | ▲      |
  | `bottom`       | ▼      |
  | `left`         | ◀      |
  | `right`        | ▶      |
  | `bottom-left`  | ◣      |
  | `bottom-right` | ◢      |
  | `top-left`     | ◤      |
  | `top-right`    | ◥      |

</alert>

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element-one {
    @include more.triangle(10px, 8px, 'top');
  }

  .element-two {
    @include more.triangle(14px, 18px, 'bottom-left', #148cd7);
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element-one {
    display: block flow;
    inline-size: 10px;
    block-size: 8px;
    background: currentColor;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }

  .element-two {
    display: block flow;
    inline-size: 14px;
    block-size: 18px;
    background: #148cd7;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
  }
  ```

  </code-block>

</code-group>
