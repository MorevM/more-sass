---
title: box
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 220
category: Миксины
fullscreen: true
---

Устанавливает размеры элемента.
Сокращённый вариант одновременной записи свойств `inline-size` и `block-size`.

<alert type="info">Inline- или block-размер может быть пропущен используя `null` (предпочтительно) или его псевдоним `n`.</alert>

## Параметры

| Имя                                              | Тип      | По умолчанию | Описание                |
| ------------------------------------------------ | -------- | ------------ | ----------------------- |
| $inline-size <span class="text-red-600">*</span> | `number` | —            | Inline-размер элемента. |
| $block-size                                      | `number` | $inline-size | Block-размер элемента.  |

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element-one {
    @include more.box(100px);
  }

  .element-two {
    @include more.box(100px, 200px);
  }

  .element-three {
    @include more.box(100px, null);
  }

  .element-four {
    @include more.box(null, 200px);
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element-one {
    inline-size: 100px;
    block-size: 100px;
  }

  .element-two {
    inline-size: 100px;
    block-size: 200px;
  }

  .element-three {
    inline-size: 100px;
  }

  .element-four {
    block-size: 200px;
  }
  ```

  </code-block>

</code-group>
