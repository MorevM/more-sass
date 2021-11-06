---
title: margin
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 265
category: Миксины
fullscreen: true
---

Сокращённый вариант записи свойства `margin` с возможностью пропускать значения*.

<alert type="info">*Значения могут быть пропущены используя `null` (предпочтительно) или его псевдоним `n`.</alert>

## Параметры

| Имя                                        | Тип    | Значение по умолчанию | Описание                                                                  |
|--------------------------------------------|--------|-----------------------|---------------------------------------------------------------------------|
| $values<span class="text-red-600">*</span> | `list` | —                     | Значения свойства `margin` в стандартном порядке (top-right-bottom-left). |

## Пример использования

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .element-one {
  	@include more.margin(10px);
  }
  
  .element-two {
  	@include more.margin(10px 20px 30px 40px); // or: @include more.margin(10px, 20px, 30px, 40px);
  }
  
  .element-three {
  	@include more.margin(null auto);
  }
  ```
  
  </code-block>
  
  <code-block label="Результат">
  
  ```css
  .element-one {
  	margin-top: 10px;
  	margin-right: 10px;
  	margin-bottom: 10px;
  	margin-left: 10px;
  }
  
  .element-two {
  	margin-top: 10px;
  	margin-right: 20px;
  	margin-bottom: 30px;
  	margin-left: 40px;
  }
  
  .element-three {
  	margin-right: auto;
  	margin-left: auto;
  }
  ```
  
  </code-block>
  
</code-group>
