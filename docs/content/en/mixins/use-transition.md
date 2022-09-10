---
title: use-transition
description: More Sass - the library of useful SCSS mixins and functions.
position: 310
category: Mixins
fullscreen: true
---

High order mixin to reduce boilerplate code for "default" transitions.

## Arguments

| Name             | Type     | Default | Description                                                           |
|------------------|----------|---------|-----------------------------------------------------------------------|
| $properties      | `list`   | —       | The list containing properties to be transitioned (space-separated).  |
| $duration        | `number` | —       | Duration of transition.                                               |
| $delay           | `number` | —       | Delay of transition.                                                  |
| $timing-function | `string` | —       | Timing-function of transition.                                        |

## Example

It's recommended to create your own mixin called `transition`, set the projects defaults and pass the content to `use-transitions` mixin next.

<code-group>

  <code-block label="SCSS" active>

  ```scss
  // setup.scss
  @use 'more-sass' as more;

  @mixin transition($properties: (), $duration: .3s) {
    @include more.use-transition($properties: $properties, $duration: $duration);
  }

  // Later in the code...

  .element {
    @include transition(opacity transform);
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element {
    transition-property: opacity, transform;
    transition-duration: .3s;
  }
  ```

  </code-block>

</code-group>
