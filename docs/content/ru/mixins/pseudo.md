---
title: pseudo
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 275
category: Миксины
fullscreen: true
---

Сокращённый вариант одновременной записи свойств `content` и `display` для псевдо-элементов.

## Параметры

| Имя      | Тип      | По умолчанию | Описание                     |
|----------|----------|--------------|------------------------------|
| $display | `string` | `block`      | Значение свойства `display`. |
| $content | `string` | `''`         | Значение свойства `content`. |

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element-one {
    &::after {
      @include more.pseudo;
    }
  }

  .element-two {
    &::after {
      @include more.pseudo('inline-block', 'foo');
    }
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element-one::after {
    content: '';
    display: block;
  }

  .element-two::after {
    content: 'foo';
    display: inline-block;
  }
  ```

  </code-block>

</code-group>
