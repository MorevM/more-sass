---
title: meta
description: More Sass - the library of useful SCSS mixins and functions.
position: 140
category: Functions
fullscreen: false
---

Functions group for common operations.

## column

Generates a value or expression that allows to set a size exactly equalled a given number of layout columns.

**Arguments:**

| Name                                            | Type               | Default | Description                                                                                           |
|-------------------------------------------------|--------------------|---------|-------------------------------------------------------------------------------------------------------|
| $expression <span class="text-red-600">*</span> | `string\|number`   | —       | An expression describing the needed number of layout columns to fill: `needed-columns / total-columns`. |
| $gutter                                         | `?number`          | `null`  | Space between layout columns.                                                                         |

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

| Name                                      | Type     | Default | Description                 |
|-------------------------------------------|----------|---------|-----------------------------|
| $char <span class="text-red-600">*</span> | `string` | —       | Human-friendly symbol name. |

**Returns:**

`?string` - The Unicode escape sequence of a given symbol or `null` if a given symbol name not registered.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.get-char('dollar'); // string: '\0024'
```

<alert type="info">

  List of available symbols:
  |                        |   |
  |------------------------|---|
  | `dollar`               | $ |
  | `section`              | § |
  | `bullet`               | • |
  | `hyphen`               | ‑ |
  | `en-dash`              | – |
  | `em-dash`              | — |
  | `copyright`            | © |
  | `registered`           | ® |
  | `degree`               | ° |
  | `ring`                 | ∘ |
  | `infinity`             | ∞ |
  | `triangle-up-black`    | ▲ |
  | `triangle-up-white`    | △ |
  | `triangle-right-black` | ▶ |
  | `triangle-right-white` | ▷ |
  | `triangle-down-black`  | ▼ |
  | `triangle-down-white`  | ▽ |
  | `triangle-left-black`  | ◀ |
  | `triangle-left-white`  | ◁ |
  | `circle-black`         | ● |
  | `circle-white`         | ○ |
  | `square-black`         | ■ |
  | `square-white`         | □ |
  | `diamond-black`        | ◆ |
  | `diamond-white`        | ◇ |
  | `diamond-inside`       | ◈ |
  | `check`                | ✓ |
  | `check-heavy`          | ✔ |
  | `cross`                | ✕ |
  | `cross-heavy`          | ✖ |
  | `fisheye`              | ◉ |

</alert>

## offset

Generates a value or expression that allows to set a size exactly equalled a given number of layout columns, plus gutter.

**Arguments:**

| Name                                            | Type             | Default | Description                                                                                           |
|-------------------------------------------------|------------------|---------|-------------------------------------------------------------------------------------------------------|
| $expression <span class="text-red-600">*</span> | `string\|number` | —       | An expression describing the needed number of layout columns to fill: `needed-columns/total-columns`. |
| $gutter                                         | `?number`        | `null`  | Space between layout columns.                                                                         |

**Returns:**

`string|number` - Calc expression or exact value.

**Example:**

```scss
@use 'more-sass' as more;
@debug more.offset('6/12'); // number: 50%
@debug more.offset('6/12', 15px); // string: calc(calc(100% / 2 - (15px * (12 - 6) / 12)) + 15px)
```

## parse-directions

Parses a given list of values using standard CSS order (top, right, bottom, left). \
Some values can be omitted using `null` (preferable) or its alias `n`.

<alert type="info">

  If one argument is supplied it used for all positioning properties.<br /><br />
  If two arguments are supplied the first is used as **top** and **bottom** value, the second is used as **left** and **right** value.<br /><br />
  If three arguments are supplied the first is used as **top** value, the second is used as **left** and **right** value, the third is used as **bottom** value.<br /><br />
  If four arguments are supplied the first is used as **top** value, the second is used as **right** value, the third is used as **bottom** value, the fourth is used as **left** value.<br /><br />

</alert>

**Arguments:**

| Name                                        | Type   | Default | Description       |
|---------------------------------------------|--------|---------|-------------------|
| $values <span class="text-red-600">*</span> | `list` | —       | A list of values. |

**Returns:**

`map` - Full set of positioning properties structured of **(position: value)**.

**Example:**

```scss
@use 'more-sass' as more;

@debug more.parse-directions(1px 2px 3px 4px); // map: (top: 1px, right: 2px, bottom: 3px, left: 4px)
@debug more.parse-directions(1px, 2px, 3px, 4px); // map: (top: 1px, right: 2px, bottom: 3px, left: 4px)

@debug more.parse-directions(null, 2px, n, 4px); // map: (top: null, right: 2px, bottom: null, left: 4px)
```
