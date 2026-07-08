---
title: triangle
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 295
category: Миксины
fullscreen: true
---

Рисует треугольник из текущего элемента.

## Параметры

| Имя                                              | Тип      | По умолчанию   | Описание                                              |
| ------------------------------------------------ | -------- | -------------- | ----------------------------------------------------- |
| $inline-size <span class="text-red-600">*</span> | `number` | —              | Строчный размер треугольника.                         |
| $block-size <span class="text-red-600">*</span>  | `number` | —              | Блочный размер треугольника.                          |
| $direction <span class="text-red-600">*</span>   | `string` | —              | Ключевое слово, описывающее направление треугольника. |
| $color                                           | `color`  | `currentColor` | Цвет треугольника.                                    |

<alert type="info">

  Список ключевых слов:

  | Ключевое слово | Фигура |
  | -------------- | ------ |
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
    display: block flow;
    inline-size: 10px;
    block-size: 8px;
    background: currentColor;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }

  .element-two {
    display: block flow;
    inline-size: 14px;
    block-size: 18px;
    background: #148cd7;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
  }
  ```

  </code-block>

</code-group>
