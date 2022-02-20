---
title: fluid-prop
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 245
category: Миксины
fullscreen: true
---

Устанавливает равномерное масштабирование переданного свойства в указанных пределах в зависимости от ширины экрана.
См. [https://www.madebymike.com.au/writing/fluid-type-calc-examples/](https://www.madebymike.com.au/writing/fluid-type-calc-examples/).

## Параметры

| Имя                                           | Тип      | По умолчанию | Описание                                                                                             |
|-----------------------------------------------|----------|--------------|------------------------------------------------------------------------------------------------------|
| $property <span class="text-red-600">*</span> | `string` | —            | Имя свойства.                                                                                        |
| $start <span class="text-red-600">*</span>    | `list`   | —            | Список, содержащий начальные значения ширины экрана и переданного свойства.                          |
| $end <span class="text-red-600">*</span>      | `list`   | —            | Список, содержащий конечные значения ширины экрана и переданного свойства.                           |
| $set-start                                    | `bool`   | `true`       | Необходимо ли использовать начальное значение свойства как "По умолчанию" для меньших размеров экрана. |

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
  	@include more.fluid-prop('margin-bottom', (320px, 20px), (1280px, 60px));
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element {
  	margin-bottom: 20px;
  }

  @media (min-width: 320px) {
  	.element {
  		margin-bottom: calc(20px + 40 * (100vw - 320px) / 960);
  	}
  }

  @media (min-width: 1280px) {
  	.element {
  		margin-bottom: 60px;
  	}
  }
  ```

  </code-block>

</code-group>
