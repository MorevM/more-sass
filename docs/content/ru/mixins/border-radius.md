---
title: border-radius
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 230
category: Миксины
fullscreen: true
---

Устанавливает значения необходимых свойств из семейства `border-radius`.

<alert type="info">Значения могут быть автоматически установлены в ноль используя `null` (предпочтительно) или его псевдоним `n`.</alert>

## Параметры

| Имя                                       | Тип            | Значение по умолчанию | Описание                                                |
|-------------------------------------------|----------------|-----------------------|---------------------------------------------------------|
| $value<span class="text-red-600">*</span> | `list\|string` | —                     | Значение свойства.                                      |
| $direction                                | `?string`      | null                  | Ключевое слово, описывающее список необходимых свойств. |

<alert type="info">

Список ключевых слов:

| Ключевое слово | Устанавливаемые свойства                                  |
|----------------|-----------------------------------------------------------|
| `top`          | `border-top-left-radius`, `border-top-right-radius`       |
| `right`        | `border-top-right-radius`, `border-bottom-right-radius`   |
| `bottom`       | `border-bottom-right-radius`, `border-bottom-left-radius` |
| `left`         | `border-top-left-radius`, `border-bottom-left-radius`     |
| `top-right`    | `border-top-right-radius`                                 |
| `top-left`     | `border-top-left-radius`                                  |
| `bottom-right` | `border-bottom-right-radius`                              |
| `bottom-left`  | `border-bottom-left-radius`                               |
| `cross-left`   | `border-top-left-radius`, `border-bottom-right-radius`    |
| `cross-right`  | `border-top-right-radius`, `border-bottom-left-radius`    |
| `all`          | `border-radius`                                           |

</alert>

## Пример использования

<code-group>
  
  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;
  
  .element-one {
  	@include more.border-radius(1px 2px null 4px);
  }
  
  .element-two {
  	@include more.border-radius(10px, 'cross-left');
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element-one {
  	border-radius: 1px 2px 0 4px;
  }
  
  .element-two {
  	border-top-left-radius: 10px;
  	border-bottom-right-radius: 10px;
  }
  ```

  </code-block>
  
</code-group>
