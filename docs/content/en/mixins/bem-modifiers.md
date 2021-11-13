---
title: bem-modifiers
description: More Sass - the library of useful SCSS mixins and functions.
position: 210
category: Mixins
fullscreen: true
---

Allows to use multiple modifiers in a single selector while using BEM methodology.

## Arguments

| Name                                          | Type   | Default | Description                     |
|-----------------------------------------------|--------|---------|---------------------------------|
| $modifiers<span class="text-red-600">*</span> | `list` | —       | A list of additional modifiers. |

## Example

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .block {
  	&__element {
  		@include more.bem-modifiers('--modifier-one', '--modifier-two', '--modifier-three') {
  			color: #f00;
  		}
  	}
  }
  ```
  
  </code-block>
  
  <code-block label="Output">
  
  ```css
  .block__element--modifier-one.block__element--modifier-two.block__element--modifier-three {
  	color: #f00;
  }
  ```
  
  </code-block>
  
</code-group>
