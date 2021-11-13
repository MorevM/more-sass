---
title: pseudo
description: More Sass - the library of useful SCSS mixins and functions.
position: 285
category: Mixins
fullscreen: true
---

Shorthand for both `content` and `display` properties of pseudo-elements.

## Arguments

| Name     | Type     | Default | Description                      |
|----------|----------|---------|----------------------------------|
| $display | `string` | block   | The value of `display` property. |
| $content | `string` | ''      | The value of `content` property. |

## Example

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .element-one {
  	&::after {
  		@include more.pseudo;
  	}
  }
  
  .element-two {
  	&::after {
  		@include more.pseudo('inline-block', 'foo');
  	}
  }
  ```
  
  </code-block>
  
  <code-block label="Output">
  
  ```css
  .element-one::after {
  	content: '';
  	display: block;
  }
  
  .element-two::after {
  	content: 'foo';
  	display: inline-block;
  }
  ```
  
  </code-block>
  
</code-group>
