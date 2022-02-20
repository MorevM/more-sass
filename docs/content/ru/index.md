---
title: Введение
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 0
fullscreen: true
---

<!-- ![Логотип More Sass](/preview.png) -->

`more-sass` - это библиотека полезных миксинов и функций для SCSS.

## Установка

<code-group>

  <code-block label="yarn" active>

  ```bash
  yarn add more-sass
  ```

  </code-block>

  <code-block label="npm">

  ```bash
  npm install more-sass
  ```

  </code-block>

</code-group>

## Использование

Вы можете импортировать как всю библиотеку целиком, так и любую необходимую её часть в отдельности - переменные, миксины, функции или определённую категорию функций:

```scss
// Импорт всей библиотеки
@use 'more-sass' as more;

// Импорт переменных
@use 'more-sass/variables' as more-variables;

// Импорт миксинов
@use 'more-sass/mixins' as more-mixins;

// Импорт функций
@use 'more-sass/functions' as more-functions;

// Импорт определённой категории функций
@use 'more-sass/functions/string' as more-string;

// Импорт определённой функции в глобальном пространстве имён
@use 'more-sass/functions/string/str-split' as *;
```

<alert type="warning">Важно!<br />More Sass необходимо использовать с основной реализацией Sass (Dart Sass).</alert>
