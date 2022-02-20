---
title: fluid-font
description: More Sass - the library of useful SCSS mixins and functions.
position: 240
category: Mixins
fullscreen: true
---

Sets the font properties (`font-size` and `line-height`) scaling uniformly within the specified limits depending on the screen width.
Shorthand for both `fluid-prop('font-size')` and `fluid-prop('line-height')`.

## Arguments

| Name                                       | Type   | Default | Description                                                           |
|--------------------------------------------|--------|---------|-----------------------------------------------------------------------|
| $start <span class="text-red-600">*</span> | `list` | —       | The list containing start values of screen width and font properties. |
| $end <span class="text-red-600">*</span>   | `list` | —       | The list containing end values of screen width and font properties.   |

<alert type="info">

  Font properties are supplied as slash-separated string of `font-size` and `line-height` values, just as in the native **font** property: `14px/1.6`.
  You can also set only **font-size** (`14px`) or only **line-height** (`/1.6`) value.

</alert>

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
  	@include more.fluid-font((320px, '14px/1.5'), (1280px, '20px/1.4'));
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element {
  	font-size: 14px;
  	line-height: 21px;
  }

  @media (min-width: 320px) {
  	.element {
  		font-size: calc(14px + 6 * (100vw - 320px) / 960);
  		line-height: calc(21px + 7 * (100vw - 320px) / 960);
  	}
  }

  @media (min-width: 1280px) {
  	.element {
  		font-size: 20px;
  		line-height: 28px;
  	}
  }
  ```

  </code-block>

</code-group>
