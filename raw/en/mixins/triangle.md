# triangle

> Draws a triangle from the current element.

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
      Triangle inline size.
    </td>
  </tr>
  
  <tr>
    <td>
      $block-size <span className="text-red-600">
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
      Triangle block size.
    </td>
  </tr>
  
  <tr>
    <td>
      $direction <span className="text-red-600">
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
      The keyword describing the triangle direction.
    </td>
  </tr>
  
  <tr>
    <td>
      $color
    </td>
    
    <td>
      <code>
        color
      </code>
    </td>
    
    <td>
      <code>
        currentColor
      </code>
    </td>
    
    <td>
      Triangle color.
    </td>
  </tr>
</tbody>
</table>

<note>

List of direction keywords:

<table>
<thead>
  <tr>
    <th>
      Keyword
    </th>
    
    <th>
      Figure
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        top
      </code>
    </td>
    
    <td>
      ▲
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bottom
      </code>
    </td>
    
    <td>
      ▼
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        left
      </code>
    </td>
    
    <td>
      ◀
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        right
      </code>
    </td>
    
    <td>
      ▶
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bottom-left
      </code>
    </td>
    
    <td>
      ◣
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bottom-right
      </code>
    </td>
    
    <td>
      ◢
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        top-left
      </code>
    </td>
    
    <td>
      ◤
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        top-right
      </code>
    </td>
    
    <td>
      ◥
    </td>
  </tr>
</tbody>
</table>
</note>

## Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  @include more.triangle(10px, 8px, 'top');
}

.element-two {
  @include more.triangle(14px, 18px, 'bottom-left', #148cd7);
}
```

```css [Output]
.element-one {
  display: block flow;
  inline-size: 10px;
  block-size: 8px;
  background: currentColor;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.element-two {
  display: block flow;
  inline-size: 14px;
  block-size: 18px;
  background: #148cd7;
  clip-path: polygon(0 0, 0 100%, 100% 100%);
}
```

</code-group>
