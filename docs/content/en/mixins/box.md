---
title: box
description: More Sass - the library of useful SCSS mixins and functions.
position: 220
category: Mixins
fullscreen: true
---

Sets the element size.  
Shorthand for both `width` and `height` properties.

<alert type="info">Width or height value can be omitted using `null` (preferable) or its alias `n`.</alert>

## Arguments

| Name                                      | Type     | Default | Description                |
|-------------------------------------------|----------|---------|----------------------------|
| $width<span class="text-red-600">*</span> | `number` | —       | The width of the element.  |
| $height                                   | `number` | $width  | The height of the element. |

## Example

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .element-one {
  	@include more.box(100px);
  }
  
  .element-two {
  	@include more.box(100px, 200px);
  }
  
  .element-three {
  	@include more.box(100px, null);
  }
  
  .element-four {
  	@include more.box(null, 200px);
  }
  ```
  
  </code-block>
  
  <code-block label="Output">
  
  ```css
  .element-one {
  	width: 100px;
  	height: 100px;
  }
  
  .element-two {
  	width: 100px;
  	height: 200px;
  }
  
  .element-three {
  	width: 100px;
  }
  
  .element-four {
  	height: 200px;
  }
  ```
  
  </code-block>
  
</code-group>
