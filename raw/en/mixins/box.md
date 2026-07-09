# box

> Sets the element size.

Shorthand for both `inline-size` and `block-size` properties.

<note>

Inline or block size value can be omitted using `null` (preferable) or its alias `n`.

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
      $inline-size <span className="text-red-600">
        *
      </span>
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
      Inline size of the element.
    </td>
  </tr>
  
  <tr>
    <td>
      $block-size
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      $inline-size
    </td>
    
    <td>
      Block size of the element.
    </td>
  </tr>
</tbody>
</table>

## Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  @include more.box(100px);
}

.element-two {
  @include more.box(100px, 200px);
}

.element-three {
  @include more.box(100px, null);
}

.element-four {
  @include more.box(null, 200px);
}
```

```css [Output]
.element-one {
  inline-size: 100px;
  block-size: 100px;
}

.element-two {
  inline-size: 100px;
  block-size: 200px;
}

.element-three {
  inline-size: 100px;
}

.element-four {
  block-size: 200px;
}
```

</code-group>
