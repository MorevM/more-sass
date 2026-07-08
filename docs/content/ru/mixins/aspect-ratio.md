---
title: aspect-ratio
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 205
category: Миксины
fullscreen: true
---

Устанавливает фиксированное соотношение сторон элемента с помощью псевдоэлемента `::before`.

## Параметры

| Имя                                        | Тип      | По умолчанию | Описание                     |
| ------------------------------------------ | -------- | ------------ | ---------------------------- |
| $width <span class="text-red-600">*</span> | `number` | —            | Необходимая ширина элемента. |
| $height                                    | `number` | $width       | Необходимая высота элемента. |

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
    @include more.aspect-ratio(1280px, 720px); // 16:9
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element {
    position: relative;
    display: block flow;
  }

  .element::before {
    content: '';
    display: block flow;
    padding-block-start: 56.25%;
  }
  ```

  </code-block>

</code-group>
