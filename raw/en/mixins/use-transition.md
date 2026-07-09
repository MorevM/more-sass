# use-transition

> High order mixin to reduce boilerplate code for "default" transitions.

## Arguments

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Default
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      $properties
    </td>
    
    <td>
      <code>
        list
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      The list containing properties to be transitioned (space-separated).
    </td>
  </tr>
  
  <tr>
    <td>
      $duration
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Duration of transition.
    </td>
  </tr>
  
  <tr>
    <td>
      $delay
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Delay of transition.
    </td>
  </tr>
  
  <tr>
    <td>
      $timing-function
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Timing-function of transition.
    </td>
  </tr>
</tbody>
</table>

## Example

It's recommended to create your own mixin called `transition`,
set the projects defaults and pass the content to `use-transitions` mixin next.

<code-group>

```scss [SCSS]
// setup.scss
@use 'more-sass' as more;

@mixin transition($properties: (), $duration: .3s) {
  @include more.use-transition($properties: $properties, $duration: $duration);
}

// Later in the code...

.element {
  @include transition(opacity transform);
}

.element-two {
  // With comma-separated list extra brackets is required
  @include transition((opacity, transform));
}
```

```css [Output]
.element {
  transition-property: opacity, transform;
  transition-duration: .3s;
}

.element-two {
  transition-property: opacity, transform;
  transition-duration: .3s;
}
```

</code-group>

If you want to use comma-separated properties without extra brackets and you don't need to customize more than one extra transition property
(usually `transition-duration` customizing is enough), you can write an extended version of `transition` mixin such as:

<code-group>

```scss [SCSS]
// setup.scss
@use 'more-sass' as more;
@use 'sass:meta';
@use 'sass:list';

@mixin transition($properties...) {
  $duration: .3s; // your default `transition-duration`

  @for $i from 1 through list.length($properties) {
    $prop: list.nth($properties, $i);

    @if (meta.type-of($prop) == 'number') {
      $duration: $prop;
      $properties: more.list-remove($properties, $i);
    }
  }

  @include use-transition($properties: $properties, $duration: $duration);
}

// Later in the code...

.element {
  // Comma-separated without extra brackets
  @include transition(opacity, transform);
}

.element-two {
  @include transition(opacity, transform, .2s);
}
```

```css [Output]
.element {
  transition-property: opacity, transform;
  transition-duration: .3s;
}
.element-two {
  transition-property: opacity, transform;
  transition-duration: .2s;
}
```

</code-group>
