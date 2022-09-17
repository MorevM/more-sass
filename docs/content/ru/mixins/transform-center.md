---
title: transform-center
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 290
category: Миксины
fullscreen: true
---

Позиционирует элемент по центру родительского элемента используя свойство `transform`.

<alert type="warning">Не забудьте указать для родительского элемента значение свойства `position` отличное от `static`.</alert>

## Параметры

—

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
  	@include more.transform-center;
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element {
  	position: absolute;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%, -50%);
  }
  ```

  </code-block>

</code-group>
