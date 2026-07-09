# hidden-element

> This is the coupled pair of mixins allows to manipulate properties that affects the element visibility.

## hidden-element

Visually hides the element. It still present in the document flow.

### Arguments

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
      $z-index
    </td>
    
    <td>
      <code>
        ?number
      </code>
    </td>
    
    <td>
      null
    </td>
    
    <td>
      The value of <code>
        z-index
      </code>
      
       property.
    </td>
  </tr>
</tbody>
</table>

### Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  @include more.hidden-element;
}

.element-two {
  @include more.hidden-element(10);
}
```

```css [Output]
.element-one {
  visibility: hidden;
  opacity: 0;
}

.element-two {
  z-index: 10;
  visibility: hidden;
  opacity: 0;
}
```

</code-group>

## hidden-element-active

Shows the hidden element. Resets the `hidden-element` mixin usage.

### Arguments

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
      $z-index
    </td>
    
    <td>
      <code>
        ?number
      </code>
    </td>
    
    <td>
      null
    </td>
    
    <td>
      The value of <code>
        z-index
      </code>
      
       property.
    </td>
  </tr>
</tbody>
</table>

### Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element {
  @include more.hidden-element-active;
}
```

```css [Output]
.element {
  visibility: visible;
  opacity: 1;
}
```

</code-group>
