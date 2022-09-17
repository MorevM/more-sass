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
|-----------|----------|----------|-----------------------------------------------------------------|
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
  	top: 10px;
  	right: 10px;
  	bottom: 10px;
  	left: 10px;
  }

  .element-two {
  	position: absolute;
  	top: 10px;
  	right: 20px;
  	bottom: 30px;
  	left: 40px;
    z-index: 5;
  }

  .element-three {
  	position: absolute;
  	right: auto;
  	left: auto;
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
