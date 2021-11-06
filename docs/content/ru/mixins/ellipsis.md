---
title: ellipsis
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 270
category: Миксины
fullscreen: true
---

Обрезает текст, выходящий за пределы текущего элемента, и добавляет в конце многоточие.

## Параметры

| Имя        | Тип      | Значение по умолчанию | Описание                     |
|------------|----------|-----------------------|------------------------------|
| $max-width | `number` | 100%                  | Ограничение ширины элемента. |

## Пример использования

<code-group>
  
  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;
  
  .element {
  	@include more.ellipsis;
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element {
  	max-width: 100%;
  	text-overflow: ellipsis;
  	white-space: nowrap;
  	overflow: hidden;
  }
  ```

  </code-block>
  
</code-group>
