---
title: pos
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 270
category: Миксины
fullscreen: true
---

Сокращённый вариант записи свойств позиционирования.

## Параметры

| Имя       | Тип      | По умолчанию | Описание                                                                  |
|-----------|----------|--------------|---------------------------------------------------------------------------|
| $position | `string` | `absolute`   | Тип позиционирования (relative, absolute и т.д.).                         |
| $values   | `list`   | `()`         | Значения позиционирования в стандартном порядке (top-right-bottom-left)*. |
| $z-index  | `number` | `null`       | Значение `z-index`, если оно необходимо.                                  |

<alert type="info">Значения могут быть пропущены используя `null` (предпочтительно) или его псевдоним `n`.</alert>

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element-one {
    @include more.pos('absolute', 10px);
  }

  .element-two {
    @include more.pos('absolute', 10px 20px 30px 40px, 5);
  }

  .element-three {
    @include more.pos('absolute', null auto);
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element-one {
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
  }

  .element-two {
    position: absolute;
    top: 10px;
    right: 20px;
    bottom: 30px;
    left: 40px;
    z-index: 5;
  }

  .element-three {
    position: absolute;
    right: auto;
    left: auto;
  }
  ```

  </code-block>

</code-group>

<alert type="info">

  Также доступны сокращённые варианты записи для конкретных типов позиционирования:

  `pos-rel($values, $z-index)`
  `pos-abs($values, $z-index)`
  `pos-fix($values, $z-index)`

</alert>
