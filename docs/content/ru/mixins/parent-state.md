---
title: parent-state
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 265
category: Миксины
fullscreen: true
---

Позволяет задавать правила псевдо-элемента, зависящие от состояния его родителя, прямо в наборе правил самого псевдо-элемента.

## Параметры

| Имя                                         | Тип     | По умолчанию | Описание                                                                                          |
|---------------------------------------------|---------|--------------|---------------------------------------------------------------------------------------------------|
| $states <span class="text-red-600">*</span> | `list` | —           | Состояние(я) родительского элемента текущего псевдо-элемента (псевдоклассы, модификаторы и т.п.). |

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
  	&::after {
  		@include more.parent-state(':hover', '.is-active') {
  			color: #f00;
  		}
  	}
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element:hover::after,
  .element.is-active::after {
  	color: #f00;
  }
  ```

  </code-block>

</code-group>
