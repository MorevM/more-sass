---
title: hide-scrollbar
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 251
category: Миксины
fullscreen: true
---

Визуально прячет любой скроллбар элемента.

## Параметры

—

### Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .block {
    @include more.hide-scrollbar;
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .block {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .block::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    appearance: none;
  }
  ```

  </code-block>

</code-group>
