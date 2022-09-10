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

  .element-two {
    // С запятой в качестве разделителя необходимы дополнительные скобки
    @include transition((opacity, transform), .3s);
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element {
    transition-property: opacity, transform;
    transition-duration: .3s;
  }

  .element-two {
    transition-property: opacity, transform;
    transition-duration: .3s;
  }
  ```

  </code-block>

</code-group>

Если хочется использовать свойства, разделяя их запятыми, не оборачивая их в дополнительные скобки, и при этом нет необходимости задавать более одного свойства `transition-XXX`
(обычно кастомизации `transition-duration` вполне достаточно), вы можете создать расширенную версию миксина `transition` вроде этой:

<code-group>

  <code-block label="SCSS" active>

  ```scss
  // setup.scss
  @use 'more-sass' as more;
  @use 'sass:meta';
  @use 'sass:list';

  @mixin transition($properties...) {
    $duration: .3s; // `transition-duration` по умолчанию, если не передано иное

    @for $i from 1 through list.length($properties) {
      $prop: list.nth($properties, $i);

      @if (meta.type-of($prop) == 'number') {
        $duration: $prop;
        $properties: more.list-remove($properties, $i);
      }
    }

    @include use-transition($properties: $properties, $duration: $duration);
  }

  // ...

  .element {
    // Свойства, разделенные запятыми, без дополнительных скобок
    @include transition(opacity, transform);
  }

  .element-two {
    @include transition(opacity, transform, .2s);
  }
  ```

  </code-block>

  <code-block label="Output">

  ```css
  .element {
    transition-property: opacity, transform;
    transition-duration: .3s; /* значение по умолчанию */
  }

  .element-two {
    transition-property: opacity, transform;
    transition-duration: .2s; /* изменённое значение по умолчанию */
  }
  ```

  </code-block>

</code-group>
