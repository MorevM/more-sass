---
title: hidden-element
description: More Sass - the library of useful SCSS mixins and functions.
position: 260
category: Mixins
fullscreen: true
---

This is the coupled pair of mixins allows to manipulate properties that affects the element visibility.

## hidden-element

Visually hides the element. It still present in the document flow.

### Arguments

| Name     | Type      | Default | Description                      |
|----------|-----------|---------|----------------------------------|
| $z-index | `?number` | null    | The value of `z-index` property. |

### Example

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .element-one {
  	@include more.hidden-element;
  }
  
  .element-two {
  	@include more.hidden-element(10);
  }
  ```
  
  </code-block>
  
  <code-block label="Output">
  
  ```css
  .element-one {
  	visibility: hidden;
  	opacity: 0;
  }
  
  .element-two {
  	z-index: 10;
  	visibility: hidden;
  	opacity: 0;
  }
  ```
  
  </code-block>
  
</code-group>

## hidden-element-active

Shows the hidden element. Resets the `hidden-element` mixin usage.

### Arguments

| Name     | Type      | Default | Description                      |
|----------|-----------|---------|----------------------------------|
| $z-index | `?number` | null    | The value of `z-index` property. |

### Example

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .element {
  	@include more.hidden-element-active;
  }
  ```
  
  </code-block>
  
  <code-block label="Output">
  
  ```css
  .element {
  	visibility: visible;
  	opacity: 1;
  }
  ```
  
  </code-block>
  
</code-group>
