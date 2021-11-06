---
title: reset-input
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 295
category: Миксины
fullscreen: true
---

Сбрасывает стили элементов `input`.

## Параметры

—

## Пример использования

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  input {
  	@include more.reset-input;
  }
  ```
  
  </code-block>
  
  <code-block label="Результат">
  
  ```css
  input {
  	margin: 0;
  	padding: 0;
  	background: none;
  	border: none;
  	box-shadow: none;
  	appearance: none;
  }
  ```
  
  </code-block>
  
</code-group>
