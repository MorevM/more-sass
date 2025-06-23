---
title: triangle
description: More Sass - the library of useful SCSS mixins and functions.
position: 295
category: Mixins
fullscreen: true
---

Draws a triangle from the current element.

## Arguments

| Name                                           | Type     | Default        | Description                                    |
|------------------------------------------------|----------|----------------|------------------------------------------------|
| $width <span class="text-red-600">*</span>     | `number` | —              | Triangle width.                                |
| $height <span class="text-red-600">*</span>    | `number` | —              | Triangle height.                               |
| $direction <span class="text-red-600">*</span> | `string` | —              | The keyword describing the triangle direction. |
| $color                                         | `color`  | `currentColor` | Triangle color.                                |

<alert type="info">

  List of direction keywords:

  | Keyword        | Figure |
  |----------------|--------|
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
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid currentColor;
  }

  .element-two {
    border-right: 14px solid transparent;
    border-bottom: 18px solid #148cd7;
  }
  ```

  </code-block>

</code-group>
