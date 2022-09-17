---
title: full-size
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 245
category: Миксины
fullscreen: true
---

Устанавливает для элемента размер, равный 100% размера его родительского элемента, и позиционирует его абсолютно.

<alert type="warning">Не забудьте указать для родительского элемента значение свойства `position`, отличное от `static`.</alert>

## Параметры

—

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
  	@include more.full-size;
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element {
  	position: absolute;
  	top: 0;
  	left: 0;
  	display: block;
  	width: 100%;
  	height: 100%;
  }
  ```

  </code-block>

</code-group>
