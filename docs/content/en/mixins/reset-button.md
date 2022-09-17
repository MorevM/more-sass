---
title: reset-button
description: More Sass - the library of useful SCSS mixins and functions.
position: 280
category: Mixins
fullscreen: true
---

Resets default styles of `button` elements.

## Arguments

—

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  button {
  	@include more.reset-button;
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  button {
  	margin: 0;
  	padding: 0;
  	font: inherit;
  	color: currentColor;
  	width: auto;
  	background: none;
  	border: 0;
  	box-shadow: none;
  	appearance: none;
  	-webkit-touch-callout: none;
  	touch-action: manipulation;
  	user-select: none;
  }
  ```

  </code-block>

</code-group>
