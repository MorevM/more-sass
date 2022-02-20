---
title: string
description: More Sass - the library of useful SCSS mixins and functions.
position: 150
category: Functions
fullscreen: false
---

Functions group for work with strings.

## str-capitalize

Capitalizes a given string.

**Arguments:**

| Name                                        | Type     | Default | Description       |
|---------------------------------------------|----------|---------|-------------------|
| $string <span class="text-red-600">*</span> | `string` | —       | The input string. |

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

| Name                                         | Type      | Default | Description                                                            |
|----------------------------------------------|-----------|---------|------------------------------------------------------------------------|
| $string <span class="text-red-600">*</span>  | `string`  | —       | The string being searched and replaced on.                             |
| $search <span class="text-red-600">*</span>  | `string`  | —       | The value being searched for.                                          |
| $replace <span class="text-red-600">*</span> | `string`  | —       | The replacement value that replaces found search values.               |
| $limit                                       | `?number` | `null`  | If supplied, this will be set to the number of replacements performed. |

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

| Name                                        | Type     | Default | Description                                            |
|---------------------------------------------|----------|---------|--------------------------------------------------------|
| $string <span class="text-red-600">*</span> | `string` | —       | The input string.                                      |
| $delimiter                                  | `string` | `''`    | The boundary string.                                   |
| $separator                                  | `string` | `auto`  | The output list separator <br />`space` \| `comma` \| `slash` \| `auto` |

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

| Name                                        | Type     | Default | Description         |
|---------------------------------------------|----------|---------|---------------------|
| $string <span class="text-red-600">*</span> | `string` | —       | The string to trim. |

**Returns:**

`string` - The string without whitespaces on both ends of it.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.str-trim(' foo bar   '); // string: 'foo bar'
```
