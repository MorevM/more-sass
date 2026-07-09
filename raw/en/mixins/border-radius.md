# border-radius

> Sets the values of the necessary rules of border-radius properties family.

<note>

Some values can be automatically set to 0 (zero) using `null` (preferable) or its alias `n`.

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
      $value <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        list|string
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Property value.
    </td>
  </tr>
  
  <tr>
    <td>
      $direction
    </td>
    
    <td>
      <code>
        ?string
      </code>
    </td>
    
    <td>
      <code>
        null
      </code>
    </td>
    
    <td>
      The keyword describing the list of properties to use.
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
      Affected properties
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
      <code>
        border-top-left-radius
      </code>
      
      , <code>
        border-top-right-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        right
      </code>
    </td>
    
    <td>
      <code>
        border-top-right-radius
      </code>
      
      , <code>
        border-bottom-right-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bottom
      </code>
    </td>
    
    <td>
      <code>
        border-bottom-right-radius
      </code>
      
      , <code>
        border-bottom-left-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        left
      </code>
    </td>
    
    <td>
      <code>
        border-top-left-radius
      </code>
      
      , <code>
        border-bottom-left-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        top-right
      </code>
    </td>
    
    <td>
      <code>
        border-top-right-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        top-left
      </code>
    </td>
    
    <td>
      <code>
        border-top-left-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bottom-right
      </code>
    </td>
    
    <td>
      <code>
        border-bottom-right-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bottom-left
      </code>
    </td>
    
    <td>
      <code>
        border-bottom-left-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        cross-left
      </code>
    </td>
    
    <td>
      <code>
        border-top-left-radius
      </code>
      
      , <code>
        border-bottom-right-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        cross-right
      </code>
    </td>
    
    <td>
      <code>
        border-top-right-radius
      </code>
      
      , <code>
        border-bottom-left-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        all
      </code>
    </td>
    
    <td>
      <code>
        border-radius
      </code>
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
  @include more.border-radius(1px 2px null 4px);
}

.element-two {
  @include more.border-radius(10px, 'cross-left');
}
```

```css [Output]
.element-one {
  border-radius: 1px 2px 0 4px;
}

.element-two {
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
```

</code-group>
