# bem-modifiers

> Allows to use multiple modifiers in a single selector while using BEM methodology.

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
      $modifiers <span className="text-red-600">
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
      A list of additional modifiers.
    </td>
  </tr>
</tbody>
</table>

## Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.block {
  &__element {
    @include more.bem-modifiers('--modifier-one', '--modifier-two', '--modifier-three') {
      color: #f00;
    }
  }
}
```

```css [Output]
.block__element--modifier-one.block__element--modifier-two.block__element--modifier-three {
  color: #f00;
}
```

</code-group>
