---
title: padding
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 260
category: Миксины
fullscreen: true
---

Сокращённый вариант записи свойства `padding` с возможностью пропускать значения*.

<alert type="info">*Значения могут быть пропущены используя `null` (предпочтительно) или его псевдоним `n`.</alert>

## Параметры

| Имя                                         | Тип    | По умолчанию | Описание                                                                   |
| ------------------------------------------- | ------ | ------------ | -------------------------------------------------------------------------- |
| $values <span class="text-red-600">*</span> | `list` | —            | Значения свойства `padding` в стандартном порядке (top-right-bottom-left). |

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element-one {
    @include more.padding(10px);
  }

  .element-two {
    @include more.padding(10px 20px 30px 40px); // or: @include more.padding(10px, 20px, 30px, 40px);
  }

  .element-three {
    @include more.padding(null auto);
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element-one {
    padding-block-start: 10px;
    padding-block-end: 10px;
    padding-inline-start: 10px;
    padding-inline-end: 10px;
  }

  .element-two {
    padding-block-start: 10px;
    padding-block-end: 30px;
    padding-inline-start: 40px;
    padding-inline-end: 20px;
  }

  .element-three {
    padding-inline-start: auto;
    padding-inline-end: auto;
  }
  ```

  </code-block>

</code-group>
