---
title: padding
description: More Sass - the library of useful SCSS mixins and functions.
position: 260
category: Mixins
fullscreen: true
---

Shorthand for set nullable* `padding` properties.

<alert type="info">*Some values can be omitted using `null` (preferable) or its alias `n`.</alert>

## Arguments

| Name                                        | Type   | Default | Description                                                   |
| ------------------------------------------- | ------ | ------- | ------------------------------------------------------------- |
| $values <span class="text-red-600">*</span> | `list` | —       | Padding values list in default order (top-right-bottom-left). |

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element-one {
    @include more.padding(10px);
  }

  .element-two {
    @include more.padding(10px 20px 30px 40px); // or: @include more.padding(10px, 20px, 30px, 40px);
  }

  .element-three {
    @include more.padding(null auto);
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element-one {
    padding-block-start: 10px;
    padding-block-end: 10px;
    padding-inline-start: 10px;
    padding-inline-end: 10px;
  }

  .element-two {
    padding-block-start: 10px;
    padding-block-end: 30px;
    padding-inline-start: 40px;
    padding-inline-end: 20px;
  }

  .element-three {
    padding-inline-start: auto;
    padding-inline-end: auto;
  }
  ```

  </code-block>

</code-group>
