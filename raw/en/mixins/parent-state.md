# parent-state

> Allows to set a pseudo-element rules depending on its parent state right in the rule set of the pseudo-element itself.

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
      $states <span className="text-red-600">
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
      Pseudo-element parent state(s) (pseudo-classes, modifier classes, etc.).
    </td>
  </tr>
</tbody>
</table>

## Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element {
  &::after {
    @include more.parent-state(':hover', '.is-active') {
      color: #f00;
    }
  }
}
```

```css [Output]
.element:hover::after,
.element.is-active::after {
  color: #f00;
}
```

</code-group>
