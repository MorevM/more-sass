---
title: list
description: More Sass - the library of useful SCSS mixins and functions.
position: 120
category: Functions
fullscreen: false
---

Functions group for work with values lists.

## list-contains

Checks whether at least one value in a given list contains a given substring.

**Arguments:**

| Name                                        | Type     | Default | Description             |
|---------------------------------------------|----------|---------|-------------------------|
| $list <span class="text-red-600">*</span>   | `list`   | —       | The input list.         |
| $search <span class="text-red-600">*</span> | `string` | —       | The searched substring. |

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

| Name                                        | Type   | Default | Description         |
|---------------------------------------------|--------|---------|---------------------|
| $list <span class="text-red-600">*</span>   | `list` | —       | The input list.     |
| $search <span class="text-red-600">*</span> | `*`    | —       | The searched value. |

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

| Name                                      | Type     | Default | Description                  |
|-------------------------------------------|----------|---------|------------------------------|
| $list <span class="text-red-600">*</span> | `list`   | —       | The input list.              |
| $separator                                | `string` | `''`    | The output string separator. |

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

| Name                                       | Type     | Default | Description                  |
|--------------------------------------------|----------|---------|------------------------------|
| $list <span class="text-red-600">*</span>  | `list`   | —       | The input list.              |
| $index <span class="text-red-600">*</span> | `number` | —       | The list element index to remove. <br />Use negative index to remove from the end of list. |

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

| Name                                          | Type     | Default | Description                 |
|-----------------------------------------------|----------|---------|-----------------------------|
| $list <span class="text-red-600">*</span>     | `list`   | —       | The input list.             |
| $start-at <span class="text-red-600">*</span> | `number` | —       | Starting index (inclusive). |
| $end-at                                       | `number` | `-1`    | Ending index (inclusive).   |

**Returns:**

`list` - The slice of the input list.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.list-slice((1, 2, 3, 4, 5), 3);    // list: (3, 4, 5)
@debug more.list-slice((1, 2, 3, 4, 5), 2, 4); // list: (2, 3, 4)
```
