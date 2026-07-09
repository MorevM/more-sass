# meta

> Functions group for common operations.

## column

Generates a value or expression that allows to set a size exactly equalled a given number of layout columns.

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
      $expression <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string|number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      An expression describing the needed number of layout columns to fill: <code>
        needed-columns / total-columns
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      $gutter
    </td>
    
    <td>
      <code>
        ?number
      </code>
    </td>
    
    <td>
      <code>
        null
      </code>
    </td>
    
    <td>
      Space between layout columns.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`string|number` - Calc expression or exact value.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.column('6/12');       // number: 50%
@debug more.column('6/12', 15px); // string: calc(100% / 2 - (15px * (12 - 6) / 12))
```

## get-char

Retrieves the Unicode escape sequence of a given symbol by its human-friendly name.

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
      $char <span className="text-red-600">
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
      Human-friendly symbol name.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`?string` - The Unicode escape sequence of a given symbol or `null` if a given symbol name not registered.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.get-char('dollar'); // string: '\0024'
```

<note>

List of available symbols:

<table>
<thead>
  <tr>
    <th>
      
    </th>
    
    <th>
      
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        dollar
      </code>
    </td>
    
    <td>
      $
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        section
      </code>
    </td>
    
    <td>
      §
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bullet
      </code>
    </td>
    
    <td>
      •
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        hyphen
      </code>
    </td>
    
    <td>
      ‑
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        en-dash
      </code>
    </td>
    
    <td>
      –
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        em-dash
      </code>
    </td>
    
    <td>
      —
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        copyright
      </code>
    </td>
    
    <td>
      ©
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        registered
      </code>
    </td>
    
    <td>
      ®
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        degree
      </code>
    </td>
    
    <td>
      °
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        ring
      </code>
    </td>
    
    <td>
      ∘
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        infinity
      </code>
    </td>
    
    <td>
      ∞
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-up-black
      </code>
    </td>
    
    <td>
      ▲
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-up-white
      </code>
    </td>
    
    <td>
      △
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-right-black
      </code>
    </td>
    
    <td>
      ▶
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-right-white
      </code>
    </td>
    
    <td>
      ▷
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-down-black
      </code>
    </td>
    
    <td>
      ▼
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-down-white
      </code>
    </td>
    
    <td>
      ▽
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-left-black
      </code>
    </td>
    
    <td>
      ◀
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-left-white
      </code>
    </td>
    
    <td>
      ◁
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        circle-black
      </code>
    </td>
    
    <td>
      ●
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        circle-white
      </code>
    </td>
    
    <td>
      ○
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        square-black
      </code>
    </td>
    
    <td>
      ■
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        square-white
      </code>
    </td>
    
    <td>
      □
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        diamond-black
      </code>
    </td>
    
    <td>
      ◆
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        diamond-white
      </code>
    </td>
    
    <td>
      ◇
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        diamond-inside
      </code>
    </td>
    
    <td>
      ◈
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        check
      </code>
    </td>
    
    <td>
      ✓
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        check-heavy
      </code>
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        cross
      </code>
    </td>
    
    <td>
      ✕
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        cross-heavy
      </code>
    </td>
    
    <td>
      ✖
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        fisheye
      </code>
    </td>
    
    <td>
      ◉
    </td>
  </tr>
</tbody>
</table>
</note>

## offset

Generates a value or expression that allows to set a size exactly equalled a given number of layout columns, plus gutter.

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
      $expression <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string|number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      An expression describing the needed number of layout columns to fill: <code>
        needed-columns/total-columns
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      $gutter
    </td>
    
    <td>
      <code>
        ?number
      </code>
    </td>
    
    <td>
      <code>
        null
      </code>
    </td>
    
    <td>
      Space between layout columns.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`string|number` - Calc expression or exact value.

**Example:**

```scss
@use 'more-sass' as more;
@debug more.offset('6/12'); // number: 50%
@debug more.offset('6/12', 15px); // string: calc(calc(100% / 2 - (15px * (12 - 6) / 12)) + 15px)
```

## parse-directions

Parses a given list of values using standard CSS order (top, right, bottom, left). <br />


Some values can be omitted using `null` (preferable) or its alias `n`.

<note>

If one argument is supplied it used for all positioning properties.

If two arguments are supplied the first is used as **top** and **bottom** value, the second is used as **left** and **right** value.

If three arguments are supplied the first is used as **top** value,
the second is used as **left** and **right** value, the third is used as **bottom** value.

If four arguments are supplied the first is used as **top** value, the second is used as **right** value,
the third is used as **bottom** value, the fourth is used as **left** value.

</note>

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
      A list of values.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`map` - Full set of positioning properties structured of **(position: value)**.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.parse-directions(1px 2px 3px 4px); // map: (top: 1px, right: 2px, bottom: 3px, left: 4px)
@debug more.parse-directions(1px, 2px, 3px, 4px); // map: (top: 1px, right: 2px, bottom: 3px, left: 4px)

@debug more.parse-directions(null, 2px, n, 4px); // map: (top: null, right: 2px, bottom: null, left: 4px)
```
