---
title: use-fluid-prop
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 305
category: Миксины
fullscreen: true
---

Устанавливает равномерное масштабирование переданного свойства в указанных пределах в зависимости от ширины экрана.
См. [https://www.madebymike.com.au/writing/fluid-type-calc-examples/](https://www.madebymike.com.au/writing/fluid-type-calc-examples/).

Рекомендуется использовать как миксин высшего порядка для задания проектных умолчаний с целью уменьшения шаблонного кода.

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
  	@include more.use-fluid-prop('margin-bottom', (320px, 20px), (1280px, 60px));
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

## Пример использования в качестве миксина высшего порядка

<code-group>

  <code-block label="SCSS" active>

  ```scss
  // setup.scss
  @use 'more-sass' as more;

  @mixin fluid-prop($property, $min, $max) {
    @include more.use-fluid-prop($property, (320px, $min), (1280px, $max));
  }

  // Other files
  .element {
  	@include fluid-prop('margin-bottom', 20px, 60px);
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
