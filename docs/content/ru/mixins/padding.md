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
|---------------------------------------------|--------|--------------|----------------------------------------------------------------------------|
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
  	padding-top: 10px;
  	padding-right: 10px;
  	padding-bottom: 10px;
  	padding-left: 10px;
  }

  .element-two {
  	padding-top: 10px;
  	padding-right: 20px;
  	padding-bottom: 30px;
  	padding-left: 40px;
  }

  .element-three {
  	padding-right: auto;
  	padding-left: auto;
  }
  ```

  </code-block>

</code-group>
