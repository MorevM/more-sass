# list

> Functions group for work with values lists.

## list-contains

Checks whether at least one value in a given list contains a given substring.

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
      $list <span className="text-red-600">
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
      The input list.
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
      The searched substring.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`bool` - `true` if one of a given list values contains a given substring, `false` otherwise.

**Example:**

```scss
@use 'more-sass' as more;

$list: ('foo', 'bar', 'baz');

@debug more.list-contains($list, 'ba');  // bool: true
@debug more.list-contains($list, 'abc'); // bool: false
```

## list-includes

Checks whether a given value exists in a given list.

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
      $list <span className="text-red-600">
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
      The input list.
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
        *
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      The searched value.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`bool` - `true` if a given value exists in a given list, `false` otherwise.

**Example:**

```scss
@use 'more-sass' as more;

$list: (1, 2, 3);

@debug more.list-includes($list, 2); // bool: true
@debug more.list-includes($list, 4); // bool: false
```

## list-join

Joins a given list elements with a given separator string.

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
      $list <span className="text-red-600">
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
      The input list.
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
        ''
      </code>
    </td>
    
    <td>
      The output string separator.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`string` - A string representation of all the list elements in the same order, with the separator string between each element.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.list-join((1, 2, 3, 4, 5));    // string: '12345'
@debug more.list-join((1, 2, 3, 4), ', '); // string: '1, 2, 3, 4'
```

## list-remove

Removes the list element by index.

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
      $list <span className="text-red-600">
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
      The input list.
    </td>
  </tr>
  
  <tr>
    <td>
      $index <span className="text-red-600">
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
      The list element index to remove. <br />
      
      Use negative index to remove from the end of list.
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`list` - A list without element with specified `$index` if found, original list clone otherwise.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.list-remove((1, 2, 3), 1);   // list: (2, 3)
@debug more.list-remove((1, 2, 3), -1);  // list: (1, 2)
@debug more.list-remove((1, 2, 3), 100); // list: (1, 2, 3)
```

## list-slice

Extracts a slice of a given list.

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
      $list <span className="text-red-600">
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
      The input list.
    </td>
  </tr>
  
  <tr>
    <td>
      $start-at <span className="text-red-600">
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
      Starting index (inclusive).
    </td>
  </tr>
  
  <tr>
    <td>
      $end-at
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      <code>
        -1
      </code>
    </td>
    
    <td>
      Ending index (inclusive).
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`list` - The slice of the input list.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.list-slice((1, 2, 3, 4, 5), 3);    // list: (3, 4, 5)
@debug more.list-slice((1, 2, 3, 4, 5), 2, 4); // list: (2, 3, 4)
```
