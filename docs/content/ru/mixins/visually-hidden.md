---
title: visually-hidden
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 310
category: Миксины
fullscreen: true
---

Визуально скрывает элемент, но оставляет его доступным.

## Параметры

—

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
  	@include more.visually-hidden;
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element {
  	position: absolute;
  	clip: rect(0 0 0 0);
  	z-index: -1;
  	width: 1px;
  	height: 1px;
  	margin: -1px;
  }
  ```

  </code-block>

</code-group>
