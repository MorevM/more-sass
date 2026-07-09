# pos

> Shorthand for use position properties.

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
      $position
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      absolute
    </td>
    
    <td>
      Position type (relative, absolute, etc.).
    </td>
  </tr>
  
  <tr>
    <td>
      $values
    </td>
    
    <td>
      <code>
        list
      </code>
    </td>
    
    <td>
      ()
    </td>
    
    <td>
      Position values list in default order (top-right-bottom-left)*.
    </td>
  </tr>
  
  <tr>
    <td>
      $z-index
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      null
    </td>
    
    <td>
      <code>
        z-index
      </code>
      
       property value if needed
    </td>
  </tr>
</tbody>
</table>

<note>

Some values can be omitted using `null` (preferable) or its alias `n`.

</note>

## Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  @include more.pos('absolute', 10px);
}

.element-two {
  @include more.pos('absolute', 10px 20px 30px 40px, 5);
}

.element-three {
  @include more.pos('absolute', null auto);
}
```

```css [Output]
.element-one {
  position: absolute;
  inset-block-start: 10px;
  inset-block-end: 10px;
  inset-inline-start: 10px;
  inset-inline-end: 10px;
}

.element-two {
  position: absolute;
  inset-block-start: 10px;
  inset-block-end: 30px;
  inset-inline-start: 40px;
  inset-inline-end: 20px;
  z-index: 5;
}

.element-three {
  position: absolute;
  inset-inline-start: auto;
  inset-inline-end: auto;
}
```

</code-group>

<note>

There are also available shorthands for certain position types:

`pos-rel($values, $z-index)``pos-abs($values, $z-index)``pos-fix($values, $z-index)`

</note>
