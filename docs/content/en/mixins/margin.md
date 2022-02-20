---
title: margin
description: More Sass - the library of useful SCSS mixins and functions.
position: 265
category: Mixins
fullscreen: true
---

Shorthand for set nullable* `margin` properties.

<alert type="info">*Some values can be omitted using `null` (preferable) or its alias `n`.</alert>

## Arguments

| Name                                        | Type   | Default | Description                                                  |
|---------------------------------------------|--------|---------|--------------------------------------------------------------|
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
  	margin-top: 10px;
  	margin-right: 10px;
  	margin-bottom: 10px;
  	margin-left: 10px;
  }

  .element-two {
  	margin-top: 10px;
  	margin-right: 20px;
  	margin-bottom: 30px;
  	margin-left: 40px;
  }

  .element-three {
  	margin-right: auto;
  	margin-left: auto;
  }
  ```

  </code-block>

</code-group>
