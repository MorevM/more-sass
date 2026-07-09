# pseudo

> Shorthand for both content and display properties of pseudo-elements.

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
      $display
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        block
      </code>
    </td>
    
    <td>
      The value of <code>
        display
      </code>
      
       property.
    </td>
  </tr>
  
  <tr>
    <td>
      $content
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        ''
      </code>
    </td>
    
    <td>
      The value of <code>
        content
      </code>
      
       property.
    </td>
  </tr>
</tbody>
</table>

## Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  &::after {
    @include more.pseudo;
  }
}

.element-two {
  &::after {
    @include more.pseudo('inline-block', 'foo');
  }
}
```

```css [Output]
.element-one::after {
  content: '';
  display: block flow;
}

.element-two::after {
  content: 'foo';
  display: inline flow-root;
}
```

</code-group>
