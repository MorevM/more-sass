# ellipsis

> Truncates text of the current element and adds an ellipsis to represent overflow.

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
      $max-inline-size
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      100%
    </td>
    
    <td>
      The element inline size limit.
    </td>
  </tr>
</tbody>
</table>

## Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element {
  @include more.ellipsis;
}
```

```css [Output]
.element {
  max-inline-size: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
```

</code-group>
