# math

> Functions group for work with numeric values.

## get-numeric

Transforms a given pseudo-number string to a real number.

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
      $value <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string | number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      The input value (number or pseudo-number string).
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`?number` - Numeric value, or `null` if value is not a [valid number](https://developer.mozilla.org/en-US/docs/Web/CSS/number#valid_numbers).

**Example:**

```scss
@use 'more-sass' as more;

@debug more.get-numeric('12px'); // number: 12px
@debug more.get-numeric('foo'); // null
```

## get-unit

Retrieves a unit of a given number.

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
      $value <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string | number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      The number or pseudo-number string to get its unit.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`?number` - A number representing the base value of received unit (1px, 1em, etc.), or `null` if value is not a valid number.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.get-unit(12px);  // number: 1px
@debug more.get-unit('12%'); // number: 1%
```

## strip-unit

Strips the unit of a given value.

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
      $value <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string | number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      The number or pseudo-number string to to remove unit from.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`?number` - The unitless number or `null` if value is not a valid number.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.strip-unit(12px);  // number: 12
@debug more.strip-unit('10%'); // number: 10
```

## with-unit

Sets default unit for a given unitless number.

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
      $value <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string | number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      The input value (number or pseudo-number string).
    </td>
  </tr>
  
  <tr>
    <td>
      $unit
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        px
      </code>
    </td>
    
    <td>
      Default unit (one of valid CSS units).
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`number` - Original number transformed to a given unit.

**Example:**

```scss
@use 'more-sass' as more;
@debug more.with-unit(12);       // number: 12px
@debug more.with-unit(12, 'em'); // number: 12em
```
