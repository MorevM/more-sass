---
title: clearfix
description: More Sass - the library of useful SCSS mixins and functions.
position: 230
category: Mixins
fullscreen: true
---

This is the coupled pair of mixins used to clear the flow after using floating elements.

## clearfix

Clears the flow inside of the current element via creating the `::after` pseudo-element.

### Arguments

—

### Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
  	@include more.clearfix;
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element::after {
  	content: '';
  	display: block;
  	clear: both;
  }
  ```

  </code-block>

</code-group>

## clearfix-element

Clears the flow around the current element.

### Arguments

—

### Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
  	@include more.clearfix-element;
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element {
  	display: block;
  	clear: both;
  }
  ```

  </code-block>

</code-group>
