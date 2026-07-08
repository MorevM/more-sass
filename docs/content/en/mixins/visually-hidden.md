---
title: visually-hidden
description: More Sass - the library of useful SCSS mixins and functions.
position: 315
category: Mixins
fullscreen: true
---

Visually hides the element but keeps it accessible.

## Arguments

—

## Example

<code-group>

<code-block label="SCSS" active>

```scss
@use 'more-sass' as more;

.element {
  @include more.visually-hidden;
}
```

</code-block>

<code-block label="Output">

```css
.element {
  position: absolute;
  z-index: -1;
  inline-size: 1px;
  block-size: 1px;
  margin: -1px;
  padding: 0;
  white-space: nowrap;
  border: 0;
  overflow: hidden;
  clip-path: inset(50%);
}
```

</code-block>

</code-group>
