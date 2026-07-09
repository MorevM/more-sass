---
title: Введение
description: More Sass - библиотека полезных миксинов и функций для SCSS.
---

<!-- ![Логотип More Sass](/preview.png) -->

`more-sass` - это библиотека полезных миксинов и функций для SCSS.

## Установка

::code-group

  ```sh [yarn]
  yarn add more-sass
  ```

  ```sh [npm]
  npm install more-sass
  ```

::

## Использование

Вы можете импортировать как всю библиотеку целиком, так и любую необходимую её часть в отдельности -
переменные, миксины, функции или определённую категорию функций:

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

::warning
Важно!
More Sass необходимо использовать с основной реализацией Sass (Dart Sass).
::
