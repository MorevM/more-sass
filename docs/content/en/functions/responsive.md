---
title: responsive
description: More Sass - the library of useful SCSS mixins and functions.
position: 135
category: Functions
fullscreen: false
---

Functions group for responsive CSS values.

## use-fluid-value

Returns a value scaling uniformly within the specified viewport limits.

**Arguments:**

| Name                                       | Type   | Default | Description                            |
| ------------------------------------------ | ------ | ------- | -------------------------------------- |
| $start <span class="text-red-600">*</span> | `list` | —       | The start viewport and property value. |
| $end <span class="text-red-600">*</span>   | `list` | —       | The end viewport and property value.   |

**Returns:**

`?number` - Fluid `clamp()` expression, single fixed value, or `null` if both values are absent.

**Example:**

```scss
@use 'more-sass' as more;

@function fluid-value($start, $end) {
  @return more.use-fluid-value((320px, $start), (1280px, $end));
}

.element {
  margin-block-start: fluid-value(16px, 32px);
}
```
