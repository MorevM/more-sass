---
title: fluid-font
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 240
category: Миксины
fullscreen: true
---

Устанавливает равномерное масштабирование свойств шрифта (`font-size` и `line-height`) в указанных пределах в зависимости от ширины экрана.  
Сокращённый вариант одновременного использования `fluid-prop('font-size')` и `fluid-prop('line-height')`.

## Параметры

| Имя                                       | Тип    | Значение по умолчанию | Описание                                                             |
|-------------------------------------------|--------|-----------------------|----------------------------------------------------------------------|
| $start<span class="text-red-600">*</span> | `list` | —                     | Список содержащий начальные значения ширины экрана и свойств шрифта. |
| $end<span class="text-red-600">*</span>   | `list` | —                     | Список содержащий конечные значения ширины экрана и свойств шрифта.  |

<alert type="info">
  
  Свойства шрифта передаются в виде строки, содержащей значения `font-size` и `line-height`, разделённые слэшем (`/`), как и в стандартном свойстве *font*: `14px/1.6`.  
  Также можно установить только значение *font-size* (`14px`) или только *line-height* (`/1.6`).  
  
</alert>

## Пример использования

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .element {
  	@include more.fluid-font((320px, '14px/1.5'), (1280px, '20px/1.4'));
  }
  ```
  
  </code-block>
  
  <code-block label="Результат">
  
  ```css
  .element {
  	font-size: 14px;
  	line-height: 21px;
  }
  
  @media (min-width: 320px) {
  	.element {
  		font-size: calc(14px + 6 * (100vw - 320px) / 960);
  		line-height: calc(21px + 7 * (100vw - 320px) / 960);
  	}
  }
  
  @media (min-width: 1280px) {
  	.element {
  		font-size: 20px;
  		line-height: 28px;
  	}
  }
  ```
  
  </code-block>
  
</code-group>
