---
title: clearfix
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 230
category: Миксины
fullscreen: true
---

Парный набор миксинов, используемых для очищения потока после использования свойства `float`.

## clearfix

Очищает поток внутри элемента, добавляя ему псевдо-элемент `::after`.

### Параметры

—

### Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
    @include more.clearfix;
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element::after {
    content: '';
    display: block;
    clear: both;
  }
  ```

  </code-block>

</code-group>

## clearfix-element

Очищает поток вокруг текущего элемента.

### Параметры

—

### Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
    @include more.clearfix-element;
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element {
    display: block;
    clear: both;
  }
  ```

  </code-block>

</code-group>
