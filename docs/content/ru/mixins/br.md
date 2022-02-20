---
title: br
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 225
category: Миксины
fullscreen: true
---

Парный набор миксинов, позволяющих управлять переносами строк, заданными вручную с использованием тега `br`.

## br-hide

Удаляет переносы строк внутри текущего элемента.

### Параметры

—

### Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
  	@include more.br-hide;
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element br {
  	display: none;
  }
  ```

  </code-block>

</code-group>

## br-show

Восстанавливает переносы строк внутри текущего элемента.

### Параметры

—

### Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
  	@include more.br-show;
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element br {
  	display: block;
  }
  ```

  </code-block>

</code-group>
