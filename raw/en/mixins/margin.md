# margin

> Shorthand for set nullable margin properties.

<note>

Some values can be omitted using `null` (preferable) or its alias `n`.

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
      $values <span className="text-red-600">
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
      Margin values list in default order (top-right-bottom-left).
    </td>
  </tr>
</tbody>
</table>

## Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  @include more.margin(10px);
}

.element-two {
  @include more.margin(10px 20px 30px 40px); // or: @include more.margin(10px, 20px, 30px, 40px);
}

.element-three {
  @include more.margin(null auto);
}
```

```css [Output]
.element-one {
  margin-block-start: 10px;
  margin-block-end: 10px;
  margin-inline-start: 10px;
  margin-inline-end: 10px;
}

.element-two {
  margin-block-start: 10px;
  margin-block-end: 30px;
  margin-inline-start: 40px;
  margin-inline-end: 20px;
}

.element-three {
  margin-inline-start: auto;
  margin-inline-end: auto;
}
```

</code-group>
