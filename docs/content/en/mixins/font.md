---
title: font
description: More Sass - the library of useful SCSS mixins and functions.
position: 240
category: Mixins
fullscreen: true
---

Shorthand for writing `font-*` rules in syntax like vanilla CSS `font` property, but without specifying the required font-family property.

## Arguments

| Name                                        | Type                   | Default | Description                                                                                                          |
|---------------------------------------------|------------------------|---------|----------------------------------------------------------------------------------------------------------------------|
| $params <span class="text-red-600">*</span> | `string\|list\|number` | —       | A set of rules for one or more of the following properties: <br />`font-style`, `font-weight`, `font-size`, `line-height`. |
| $font-family                                | `?string`              | `null`  | The `font-family` property value.                                                                                    |

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element-one {
    @include more.font('italic 700 16px/1.5');
  }

  .element-two {
    @include more.font(32px);
  }

  .element-three {
    @include more.font('/1.2');
  }

  .element-four {
    @include more.font(16px, 'Agora Slab Pro');
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element-one {
    font-style: italic;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
  }

  .element-two {
    font-size: 32px;
  }

  .element-three {
    line-height: 1.2;
  }

  .element-four {
    font-size: 16px;
    font-family: 'Agora Slab Pro';
  }
  ```

  </code-block>

</code-group>
