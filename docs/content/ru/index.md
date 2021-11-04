---
title: 'Введение'
description: 'More Sass - библиотека полезных миксинов и функций для SCSS.'
position: 0
fullscreen: true
---

![Логотип More Sass](/static/preview.png)

Библиотека полезных миксинов и функций для SCSS.

[![Статус сборки](https://github.com/MorevM/more-sass/workflows/Build/badge.svg)](https://github.com/MorevM/more-sass/actions?query=workflow%3ABuild)
[![Лицензия: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Установка

<code-group>

<code-block label="yarn" active>
```bash
yarn add more-sass
```
</code-block>

<code-block label="npm">
```bash
npm install more-sass -P
```
</code-block>

</code-group>

## Использование

Вы можете импортировать как всю библиотеку целиком, так и любую необходимую её часть в отдельности - переменные, миксины, функции или определённую категорию функций:

```scss
@use 'more-sass' as more; // импорт всей библиотеки
@use 'more-sass/variables' as more-variables; // импорт только переменных
@use 'more-sass/mixins' as more-mixins; // импорт только миксинов
@use 'more-sass/functions' as more-functions; // импорт только функций
@use 'more-sass/functions/string' as more-string; // импорт определённой категории функций
@use 'more-sass/functions/string/str-split' as *; // импорт определённой функции в глобальном пространстве имён
```
