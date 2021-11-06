---
title: border-radius
description: More Sass - the library of useful SCSS mixins and functions.
position: 230
category: Mixins
fullscreen: true
---

Sets the values of the necessary rules of `border-radius` properties family.

<alert type="info">Some values can be automatically set to 0 (zero) using `null` (preferable) or its alias `n`.</alert>

## Arguments

| Name                                      | Type           | Default | Description                                           |
|-------------------------------------------|----------------|---------|-------------------------------------------------------|
| $value<span class="text-red-600">*</span> | `list\|string` | —       | Property value.                                       |
| $direction                                | `?string`      | null    | The keyword describing the list of properties to use. |

<alert type="info">

List of direction keywords:

| Keyword        | Affected properties                                       |
|----------------|-----------------------------------------------------------|
| `top`          | `border-top-left-radius`, `border-top-right-radius`       |
| `right`        | `border-top-right-radius`, `border-bottom-right-radius`   |
| `bottom`       | `border-bottom-right-radius`, `border-bottom-left-radius` |
| `left`         | `border-top-left-radius`, `border-bottom-left-radius`     |
| `top-right`    | `border-top-right-radius`                                 |
| `top-left`     | `border-top-left-radius`                                  |
| `bottom-right` | `border-bottom-right-radius`                              |
| `bottom-left`  | `border-bottom-left-radius`                               |
| `cross-left`   | `border-top-left-radius`, `border-bottom-right-radius`    |
| `cross-right`  | `border-top-right-radius`, `border-bottom-left-radius`    |
| `all`          | `border-radius`                                           |

</alert>

## Example

<code-group>
  
  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;
  
  .element-one {
  	@include more.border-radius(1px 2px null 4px);
  }
  
  .element-two {
  	@include more.border-radius(10px, 'cross-left');
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element-one {
  	border-radius: 1px 2px 0 4px;
  }
  
  .element-two {
  	border-top-left-radius: 10px;
  	border-bottom-right-radius: 10px;
  }
  ```

  </code-block>
  
</code-group>
