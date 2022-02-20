---
title: box
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 220
category: Миксины
fullscreen: true
---

Устанавливает размеры элемента.
Сокращённый вариант одновременной записи свойств `width` и `height`.

<alert type="info">Значения могут быть пропущены используя `null` (предпочтительно) или его псевдоним `n`.</alert>

## Параметры

| Имя                                        | Тип      | По умолчанию | Описание         |
|--------------------------------------------|----------|--------------|------------------|
| $width <span class="text-red-600">*</span> | `number` | —            | Ширина элемента. |
| $height                                    | `number` | $width       | Высота элемента. |

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
  	width: 100px;
  	height: 100px;
  }

  .element-two {
  	width: 100px;
  	height: 200px;
  }

  .element-three {
  	width: 100px;
  }

  .element-four {
  	height: 200px;
  }
  ```

  </code-block>

</code-group>
