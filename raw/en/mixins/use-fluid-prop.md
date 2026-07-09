# use-fluid-prop

> Sets a given property scaling uniformly within the specified limits depending on the screen width.

See [https://www.madebymike.com.au/writing/fluid-type-calc-examples/](https://www.madebymike.com.au/writing/fluid-type-calc-examples/).

<note>

This mixin is kept for backward compatibility.
For new code, prefer `use-fluid-value`: the function keeps the value inside a CSS declaration,
which preserves editor, linter, and tooling integration, and is closer to native CSS functions
that will eventually land in CSS.
The higher-order mixin or function pattern is still useful: use it to set project breakpoints
and reduce boilerplate.

</note>

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
      $property <span className="text-red-600">
        *
      </span>
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
      Property name.
    </td>
  </tr>
  
  <tr>
    <td>
      $start <span className="text-red-600">
        *
      </span>
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
      The list containing start values of screen width and property.
    </td>
  </tr>
  
  <tr>
    <td>
      $end <span className="text-red-600">
        *
      </span>
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
      The list containing end values of screen width and property.
    </td>
  </tr>
</tbody>
</table>

## Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element {
  @include more.use-fluid-prop('margin-block-end', (320px, 20px), (1280px, 60px));
}
```

```css [Output]
.element {
  margin-block-end: clamp(20px, calc(20px + 40 * (100vi - 320px) / 960), 60px);
}
```

</code-group>

## Example as high order mixin

<code-group>

```scss [SCSS]
// setup.scss
@use 'more-sass' as more;

@mixin fluid-prop($property, $min, $max) {
  @include more.use-fluid-prop($property, (320px, $min), (1280px, $max));
}

// Other files
.element {
  @include fluid-prop('margin-block-end', 20px, 60px);
}
```

```css [Output]
.element {
  margin-block-end: clamp(20px, calc(20px + 40 * (100vi - 320px) / 960), 60px);
}
```

</code-group>
