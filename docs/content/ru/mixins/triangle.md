---
title: triangle
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 305
category: Миксины
fullscreen: true
---

Рисует треугольник из текущего элемента.

## Параметры

| Имя                                            | Тип      | По умолчанию   | Описание                                              |
|------------------------------------------------|----------|----------------|-------------------------------------------------------|
| $width <span class="text-red-600">*</span>     | `number` | —              | Ширина треугольника.                                  |
| $height <span class="text-red-600">*</span>    | `number` | —              | Высота треугольника.                                  |
| $direction <span class="text-red-600">*</span> | `string` | —              | Ключевое слово, описывающее направление треугольника. |
| $color                                         | `color`  | `currentColor` | Цвет треугольника.                                    |

<alert type="info">

  Список ключевых слов:

  | Ключевое слово | Фигура |
  |----------------|--------|
  | `top`          | ▲      |
  | `bottom`       | ▼      |
  | `left`         | ◀      |
  | `right`        | ▶      |
  | `bottom-left`  | ◣      |
  | `bottom-right` | ◢      |
  | `top-left`     | ◤      |
  | `top-right`    | ◥      |

</alert>

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element-one {
  	@include more.triangle(10px, 8px, 'top');
  }

  .element-two {
  	@include more.triangle(14px, 18px, 'bottom-left', #148cd7);
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element-one {
  	border-left: 5px solid transparent;
  	border-right: 5px solid transparent;
  	border-bottom: 8px solid currentColor;
  }

  .element-two {
  	border-right: 14px solid transparent;
  	border-bottom: 18px solid #148cd7;
  }
  ```

  </code-block>

</code-group>
