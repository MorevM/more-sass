# string

> Functions group for work with strings.

## str-capitalize

Capitalizes a given string.

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
      $string <span className="text-red-600">
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
      The input string.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`string` - The input string with its first character transformed to uppercase.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.str-capitalize('foo bar'); // string: 'Foo bar'
```

## str-replace

Replaces all occurrences of the search string with the replacement string.

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
      $string <span className="text-red-600">
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
      The string being searched and replaced on.
    </td>
  </tr>
  
  <tr>
    <td>
      $search <span className="text-red-600">
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
      The value being searched for.
    </td>
  </tr>
  
  <tr>
    <td>
      $replace <span className="text-red-600">
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
      The replacement value that replaces found search values.
    </td>
  </tr>
  
  <tr>
    <td>
      $limit
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
      If supplied, this will be set to the number of replacements performed.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`string` - The string with searched values replaced.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.str-replace('foo bar baz', 'ba', 'x'); // string: 'foo xr xz'
```

## str-split

Splits a given string to a list of strings.

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
      $string <span className="text-red-600">
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
      The input string.
    </td>
  </tr>
  
  <tr>
    <td>
      $delimiter
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
      The boundary string.
    </td>
  </tr>
  
  <tr>
    <td>
      $separator
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        auto
      </code>
    </td>
    
    <td>
      The output list separator <br />
      
      <code>
        space
      </code>
      
       | <code>
        comma
      </code>
      
       | <code>
        slash
      </code>
      
       | <code>
        auto
      </code>
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`list` - The list containing strings created by splitting the input string by boundary string.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.str-split('foo|bar|baz', '|', 'comma'); // list: ('foo', 'bar', 'baz')
```

## str-trim

Removes whitespaces from both ends of a given string.

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
      $string <span className="text-red-600">
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
      The string to trim.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`string` - The string without whitespaces on both ends of it.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.str-trim(' foo bar   '); // string: 'foo bar'
```
