---
title: full-size
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 245
category: Миксины
fullscreen: true
---

Устанавливает для элемента размер, равный 100% размера его родительского элемента, и позиционирует его абсолютно.

<alert type="warning">Не забудьте указать для родительского элемента значение свойства `position`, отличное от `static`.</alert>

## Параметры

—

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
    @include more.full-size;
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    display: block flow;
    inline-size: 100%;
    block-size: 100%;
  }
  ```

  </code-block>

</code-group>
