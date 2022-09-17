---
title: parent-state
description: More Sass - the library of useful SCSS mixins and functions.
position: 265
category: Mixins
fullscreen: true
---

Allows to set a pseudo-element rules depending on its parent state right in the rule set of the pseudo-element itself.

## Arguments

| Name                                        | Type   | Default | Description                                                              |
|---------------------------------------------|--------|---------|--------------------------------------------------------------------------|
| $states <span class="text-red-600">*</span> | `list` | —       | Pseudo-element parent state(s) (pseudo-classes, modifier classes, etc.). |

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
  	&::after {
  		@include more.parent-state(':hover', '.is-active') {
  			color: #f00;
  		}
  	}
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element:hover::after,
  .element.is-active::after {
  	color: #f00;
  }
  ```

  </code-block>

</code-group>
