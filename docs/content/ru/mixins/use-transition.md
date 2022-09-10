---
title: use-transition
description: More Sass - the library of useful SCSS mixins and functions.
position: 310
category: Миксины
fullscreen: true
---

Миксин высшего порядка для уменьшения шаблонного кода для переходов "по умолчанию".

## Параметры

| Name             | Type     | Default | Description                                                             |
|------------------|----------|---------|-------------------------------------------------------------------------|
| $properties      | `list`   | —       | Список свойств для анимации. Используйте пробел в качестве разделителя. |
| $duration        | `number` | —       | Длительность анимации.                                                  |
| $delay           | `number` | —       | Задержка анимации.                                                      |
| $timing-function | `string` | —       | Функция плавности анимации.                                             |

## Пример использования

Рекомендуется создать свой миксин, названный `transition`, задать в нём настройки для проекта и передать результат в `use-transition`.

<code-group>

  <code-block label="SCSS" active>

  ```scss
  // setup.scss
  @use 'more-sass' as more;

  @mixin transition($properties: (), $duration: .3s) {
    @include more.use-transition($properties: $properties, $duration: $duration);
  }

  // ...

  .element {
    @include transition(opacity transform);
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element {
    transition-property: opacity, transform;
    transition-duration: .3s;
  }
  ```

  </code-block>

</code-group>
