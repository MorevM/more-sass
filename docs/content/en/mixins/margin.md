---
title: margin
description: More Sass - the library of useful SCSS mixins and functions.
position: 255
category: Mixins
fullscreen: true
---

Shorthand for set nullable* `margin` properties.

<alert type="info">*Some values can be omitted using `null` (preferable) or its alias `n`.</alert>

## Arguments

| Name                                        | Type   | Default | Description                                                  |
| ------------------------------------------- | ------ | ------- | ------------------------------------------------------------ |
| $values <span class="text-red-600">*</span> | `list` | —       | Margin values list in default order (top-right-bottom-left). |

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element-one {
    @include more.margin(10px);
  }

  .element-two {
    @include more.margin(10px 20px 30px 40px); // or: @include more.margin(10px, 20px, 30px, 40px);
  }

  .element-three {
    @include more.margin(null auto);
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element-one {
    margin-block-start: 10px;
    margin-block-end: 10px;
    margin-inline-start: 10px;
    margin-inline-end: 10px;
  }

  .element-two {
    margin-block-start: 10px;
    margin-block-end: 30px;
    margin-inline-start: 40px;
    margin-inline-end: 20px;
  }

  .element-three {
    margin-inline-start: auto;
    margin-inline-end: auto;
  }
  ```

  </code-block>

</code-group>
