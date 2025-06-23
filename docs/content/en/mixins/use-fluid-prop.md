---
title: use-fluid-prop
description: More Sass - the library of useful SCSS mixins and functions.
position: 305
category: Mixins
fullscreen: true
---

Sets a given property scaling uniformly within the specified limits depending on the screen width. \
See [https://www.madebymike.com.au/writing/fluid-type-calc-examples/](https://www.madebymike.com.au/writing/fluid-type-calc-examples/).

It's recommended to use this mixin as high order mixin to set project defaults and reduce the boilerplate code.

## Arguments

| Name                                          | Type     | Default | Description                                                    |
|-----------------------------------------------|----------|---------|----------------------------------------------------------------|
| $property <span class="text-red-600">*</span> | `string` | —       | Property name.                                                 |
| $start <span class="text-red-600">*</span>    | `list`   | —       | The list containing start values of screen width and property. |
| $end <span class="text-red-600">*</span>      | `list`   | —       | The list containing end values of screen width and property.   |
| $set-start                                    | `bool`   | `true`  | Whether to use the start property value as default.            |

## Example

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
    @include more.use-fluid-prop('margin-bottom', (320px, 20px), (1280px, 60px));
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element {
    margin-bottom: 20px;
  }

  @media (min-width: 320px) {
    .element {
      margin-bottom: calc(20px + 40 * (100vw - 320px) / 960);
    }
  }

  @media (min-width: 1280px) {
    .element {
      margin-bottom: 60px;
    }
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

  @mixin fluid-prop($property, $min, $max) {
    @include more.use-fluid-prop($property, (320px, $min), (1280px, $max));
  }

  // Other files
  .element {
    @include fluid-prop('margin-bottom', 20px, 60px);
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element {
    margin-bottom: 20px;
  }

  @media (min-width: 320px) {
    .element {
      margin-bottom: calc(20px + 40 * (100vw - 320px) / 960);
    }
  }

  @media (min-width: 1280px) {
    .element {
      margin-bottom: 60px;
    }
  }
  ```

  </code-block>

</code-group>
