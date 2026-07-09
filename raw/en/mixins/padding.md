# padding

> Shorthand for set nullable padding properties.

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
      Padding values list in default order (top-right-bottom-left).
    </td>
  </tr>
</tbody>
</table>

## Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  @include more.padding(10px);
}

.element-two {
  @include more.padding(10px 20px 30px 40px); // or: @include more.padding(10px, 20px, 30px, 40px);
}

.element-three {
  @include more.padding(null auto);
}
```

```css [Output]
.element-one {
  padding-block-start: 10px;
  padding-block-end: 10px;
  padding-inline-start: 10px;
  padding-inline-end: 10px;
}

.element-two {
  padding-block-start: 10px;
  padding-block-end: 30px;
  padding-inline-start: 40px;
  padding-inline-end: 20px;
}

.element-three {
  padding-inline-start: auto;
  padding-inline-end: auto;
}
```

</code-group>
