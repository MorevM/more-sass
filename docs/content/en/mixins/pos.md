---
title: pos
description: More Sass - the library of useful SCSS mixins and functions.
position: 270
category: Mixins
fullscreen: true
---

Shorthand for use position properties.

## Arguments

| Name      | Type     | Default  | Description                                                     |
| --------- | -------- | -------- | --------------------------------------------------------------- |
| $position | `string` | absolute | Position type (relative, absolute, etc.).                       |
| $values   | `list`   | ()       | Position values list in default order (top-right-bottom-left)*. |
| $z-index  | `number` | null     | `z-index` property value if needed                              |

<alert type="info">Some values can be omitted using `null` (preferable) or its alias `n`.</alert>

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element-one {
    @include more.pos('absolute', 10px);
  }

  .element-two {
    @include more.pos('absolute', 10px 20px 30px 40px, 5);
  }

  .element-three {
    @include more.pos('absolute', null auto);
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element-one {
    position: absolute;
    inset-block-start: 10px;
    inset-block-end: 10px;
    inset-inline-start: 10px;
    inset-inline-end: 10px;
  }

  .element-two {
    position: absolute;
    inset-block-start: 10px;
    inset-block-end: 30px;
    inset-inline-start: 40px;
    inset-inline-end: 20px;
    z-index: 5;
  }

  .element-three {
    position: absolute;
    inset-inline-start: auto;
    inset-inline-end: auto;
  }
  ```

  </code-block>

</code-group>

<alert type="info">

  There are also available shorthands for certain position types:

  `pos-rel($values, $z-index)`
  `pos-abs($values, $z-index)`
  `pos-fix($values, $z-index)`

</alert>
