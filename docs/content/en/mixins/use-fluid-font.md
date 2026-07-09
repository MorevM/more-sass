---
title: use-fluid-font
description: More Sass - the library of useful SCSS mixins and functions.
position: 300
category: Mixins
fullscreen: true
---

Sets the font properties (`font-size` and `line-height`) scaling uniformly within the specified limits depending on the screen width.
Shorthand for both `fluid-prop('font-size')` and `fluid-prop('line-height')`.

It's recommended to use this mixin as high order mixin to set project defaults and reduce the boilerplate code.

## Arguments

| Name                                       | Type   | Default | Description                                                           |
| ------------------------------------------ | ------ | ------- | --------------------------------------------------------------------- |
| $start <span class="text-red-600">*</span> | `list` | —       | The list containing start values of screen width and font properties. |
| $end <span class="text-red-600">*</span>   | `list` | —       | The list containing end values of screen width and font properties.   |

<alert type="info">

  Font properties are supplied as slash-separated string of `font-size` and `line-height` values,
  just as in the native **font** property: `14px/1.6`.
  You can also set only **font-size** (`14px`) or only **line-height** (`/1.6`) value.

</alert>

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
    @include more.use-fluid-font((320px, '14px/1.5'), (1280px, '20px/1.4'));
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element {
    font-size: clamp(14px, calc(14px + 6 * (100vi - 320px) / 960), 20px);
    line-height: clamp(21px, calc(21px + 7 * (100vi - 320px) / 960), 28px);
  }
  ```

  </code-block>

</code-group>

## Example as high order mixin

<code-group>

  <code-block label="SCSS" active>

  ```scss
  // setup.scss
  @use 'more-sass' as more;

  @mixin fluid-font($min, $max) {
    @include more.use-fluid-font((320px, $min), (1280px, $max));
  }

  // Other files
  .element {
    @include fluid-font('14px/1.5', '20px/1.4');
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element {
    font-size: clamp(14px, calc(14px + 6 * (100vi - 320px) / 960), 20px);
    line-height: clamp(21px, calc(21px + 7 * (100vi - 320px) / 960), 28px);
  }
  ```

  </code-block>
