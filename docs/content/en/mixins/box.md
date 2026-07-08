---
title: box
description: More Sass - the library of useful SCSS mixins and functions.
position: 220
category: Mixins
fullscreen: true
---

Sets the element size.
Shorthand for both `inline-size` and `block-size` properties.

<alert type="info">Inline or block size value can be omitted using `null` (preferable) or its alias `n`.</alert>

## Arguments

| Name                                             | Type     | Default      | Description                 |
| ------------------------------------------------ | -------- | ------------ | --------------------------- |
| $inline-size <span class="text-red-600">*</span> | `number` | —            | Inline size of the element. |
| $block-size                                      | `number` | $inline-size | Block size of the element.  |

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
    inline-size: 100px;
    block-size: 100px;
  }

  .element-two {
    inline-size: 100px;
    block-size: 200px;
  }

  .element-three {
    inline-size: 100px;
  }

  .element-four {
    block-size: 200px;
  }
  ```

  </code-block>

</code-group>
