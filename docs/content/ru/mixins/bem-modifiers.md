---
title: bem-modifiers
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 210
category: Миксины
fullscreen: true
---

Позволяет использовать несколько модификаторов в одном селекторе при использовании методологии БЭМ.

## Параметры

| Имя                                           | Тип    | Значение по умолчанию | Описание                             |
|-----------------------------------------------|--------|-----------------------|--------------------------------------|
| $modifiers<span class="text-red-600">*</span> | `list` | —                     | Список дополнительных модификаторов. |

## Пример использования

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .block {
  	&__element {
  		@include more.bem-modifiers('--modifier-one', '--modifier-two', '--modifier-three') {
  			color: #f00;
  		}
  	}
  }
  ```
  
  </code-block>
  
  <code-block label="Результат">
  
  ```css
  .block__element--modifier-one.block__element--modifier-two.block__element--modifier-three {
  	color: #f00;
  }
  ```
  
  </code-block>
  
</code-group>
