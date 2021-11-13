---
title: visually-hidden
description: More Sass - the library of useful SCSS mixins and functions.
position: 310
category: Mixins
fullscreen: true
---

Visually hides the element but keeps it accessible.

## Arguments

—

## Example

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .element {
  	@include more.visually-hidden;
  }
  ```
  
  </code-block>
  
  <code-block label="Output">
  
  ```css
  .element {
  	position: absolute;
  	clip: rect(0 0 0 0);
  	z-index: -1;
  	width: 1px;
  	height: 1px;
  	margin: -1px;
  }
  ```
  
  </code-block>
  
</code-group>
