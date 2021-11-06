---
title: br
description: More Sass - the library of useful SCSS mixins and functions.
position: 225
category: Mixins
fullscreen: true
---

This is the coupled pair of mixins allows to manipulate over the line breaks that were set manually with `br` tag.

## br-hide

Removes a line breaks inside of the current element.

### Arguments

—

### Example

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .element {
  	@include more.br-hide;
  }
  ```
  
  </code-block>
  
  <code-block label="Output">
  
  ```css
  .element br {
  	display: none;
  }
  ```
  
  </code-block>
  
</code-group>

## br-show

Restores a line breaks inside of the current element.

### Arguments

—

### Example

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .element {
  	@include more.br-show;
  }
  ```
  
  </code-block>
  
  <code-block label="Output">
  
  ```css
  .element br {
  	display: block;
  }
  ```
  
  </code-block>
  
</code-group>
