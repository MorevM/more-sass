---
title: aspect-ratio
description: More Sass - the library of useful SCSS mixins and functions.
position: 205
category: Mixins
fullscreen: true
---

Sets the fixed aspect ratio of the element.

## Arguments

| Name                                      | Type     | Default | Description                |
|-------------------------------------------|----------|---------|----------------------------|
| $width<span class="text-red-600">*</span> | `number` | —       | The needed element width.  |
| $height                                   | `number` | $width  | The needed element height. |

## Example

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .element {
  	@include more.aspect-ratio(1280px, 720px); // 16:9
  }
  ```
  
  </code-block>
  
  <code-block label="Output">
  
  ```css
  .element {
  	display: block;
  	position: relative;
  }
  
  .element::before {
  	content: '';
  	display: block;
  	padding-top: 56.25%;
  }
  ```
  
  </code-block>
  
</code-group>
