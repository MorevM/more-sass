# responsive

> Functions group for responsive CSS values.

## use-fluid-value

Returns a value scaling uniformly within the specified viewport limits.

**Arguments:**

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
      $start <span className="text-red-600">
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
      The start viewport and property value.
    </td>
  </tr>
  
  <tr>
    <td>
      $end <span className="text-red-600">
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
      The end viewport and property value.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`?number` - Fluid `clamp()` expression, single fixed value, or `null` if both values are absent.

**Example:**

```scss
@use 'more-sass' as more;

@function fluid-value($start, $end) {
  @return more.use-fluid-value((320px, $start), (1280px, $end));
}

.element {
  margin-block-start: fluid-value(16px, 32px);
}
```
