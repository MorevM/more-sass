---
title: meta
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 140
category: Функции
fullscreen: false
---

Категория функций для выполнения общих операций.

## column

Генерирует значение или выражение, которое позволит установить размер, в точности равный заданному количеству колонок макета.

**Параметры:**

| Имя                                             | Тип               | По умолчанию | Описание                                                                                         |
|-------------------------------------------------|-------------------|--------------|--------------------------------------------------------------------------------------------------|
| $expression <span class="text-red-600">*</span> | `string\|number`  | —            | Выражение, описывающее необходимый размер в колонках макета: `необходимо-колонок/всего-колонок`. |
| $gutter                                         | `?number`         | null         | Расстояние между колонками макета.                                                               |

**Возвращаемое значение:**

`string|number` - Выражение `calc` или точное значение.

**Пример использования:**

```scss
@use 'more-sass' as more;
@debug more.column('6/12');       // number: 50%
@debug more.column('6/12', 15px); // string: calc(100% / 2 - (15px * (12 - 6) / 12))
```

## get-char

Получает Unicode-escape значение символа по его человекопонятному имени.

**Параметры:**

| Имя                                       | Тип      | По умолчанию | Описание                      |
|-------------------------------------------|----------|--------------|-------------------------------|
| $char <span class="text-red-600">*</span> | `string` | —            | Человекопонятное имя символа. |

**Возвращаемое значение:**

`?string` - Unicode-escape значение символа, или `null` если переданное имя символа не зарегистрировано.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.get-char('dollar'); // string: '\0024'
```

<alert type="info">

  Список доступных символов:
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

Генерирует значение или выражение, которое позволит установить размер, в точности равный заданному количеству колонок макета, плюс дополнительный отступ, равный расстоянию между колонками.

**Параметры:**

| Имя                                             | Тип              | По умолчанию | Описание                                                                                         |
|-------------------------------------------------|------------------|--------------|--------------------------------------------------------------------------------------------------|
| $expression <span class="text-red-600">*</span> | `string\|number` | —            | Выражение, описывающее необходимый размер в колонках макета: `необходимо-колонок/всего-колонок`. |
| $gutter                                         | `?number`        | null         | Расстояние между колонками макета.                                                               |

**Возвращаемое значение:**

`string|number` - Выражение `calc` или точное значение.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.offset('6/12');       // number: 50%
@debug more.offset('6/12', 15px); // string: calc(calc(100% / 2 - (15px * (12 - 6) / 12)) + 15px)
```

## parse-directions

Разбирает переданный список значений используя стандартный порядок CSS (top, right, bottom, left).
Значения могут быть пропущены используя `null` (предпочтительно) или его псевдоним `n`.

<alert type="info">

  Если передан один аргумент, он используется для всех свойств позиционирования.<br /><br />
  Если передано два аргумента, первое используется как значение **top** и **bottom**, второе - как значение **left** и **right**.<br /><br />
  Если передано три аргумента, первое используется как значение **top**, второе - как значение **left** и **right**, третье - как значение **bottom**.<br /><br />
  Если передано четыре аргумента, первое используется как значение **top**, второе - как значение **left**, третье - как значение **bottom**, четвёртое - как значение **left**.<br /><br />

</alert>

**Параметры:**

| Имя                                         | Тип    | По умолчанию | Описание         |
|---------------------------------------------|--------|--------------|------------------|
| $values <span class="text-red-600">*</span> | `list` | —           | Список значений. |

**Возвращаемое значение:**

`map` - Полный набор свойств позиционирования в формате **(position: value)**.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.parse-directions(1px 2px 3px 4px); // map: (top: 1px, right: 2px, bottom: 3px, left: 4px)
@debug more.parse-directions(1px, 2px, 3px, 4px); // map: (top: 1px, right: 2px, bottom: 3px, left: 4px)

@debug more.parse-directions(null, 2px, n, 4px); // map: (top: null, right: 2px, bottom: null, left: 4px)
```
