---
title: reset-button
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 280
category: Миксины
fullscreen: true
---

Сбрасывает стили элементов `button`.

## Параметры

—

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  button {
  	@include more.reset-button;
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  button {
  	margin: 0;
  	padding: 0;
  	font: inherit;
  	color: currentColor;
  	width: auto;
  	background: none;
  	border: 0;
  	box-shadow: none;
  	appearance: none;
  	-webkit-touch-callout: none;
  	touch-action: manipulation;
  	user-select: none;
  }
  ```

  </code-block>

</code-group>
