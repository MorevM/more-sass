---
title: transform-center
description: More Sass - the library of useful SCSS mixins and functions.
position: 300
category: Mixins
fullscreen: true
---

Positions the element in the center of the parent element via `transform` property.

<alert type="warning">Don't forget to set the parent `position` property other than `static`.</alert>

## Arguments

—

## Example

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .element {
  	@include more.transform-center;
  }
  ```
  
  </code-block>
  
  <code-block label="Output">
  
  ```css
  .element {
  	position: absolute;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%, -50%);
  }
  ```
  
  </code-block>
  
</code-group>
