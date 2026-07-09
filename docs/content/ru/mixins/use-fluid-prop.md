---
title: use-fluid-prop
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 305
category: Миксины
fullscreen: true
---

Устанавливает равномерное масштабирование переданного свойства в указанных пределах в зависимости от ширины экрана.
См. <https://www.madebymike.com.au/writing/fluid-type-calc-examples/>.

<alert type="info">

  Миксин оставлен для обратной совместимости.
  Для нового кода рекомендуется использовать `use-fluid-value`: функция сохраняет значение внутри CSS-декларации,
  поэтому лучше работает с редакторами, линтерами и другими инструментами, а также ближе к нативным CSS-функциям,
  которые рано или поздно появятся в CSS.
  Паттерн миксина или функции высшего порядка остаётся актуальным: используйте его, чтобы задать проектные
  брейкпоинты и уменьшить шаблонный код.

</alert>

## Параметры

| Имя                                           | Тип      | По умолчанию | Описание                                                                    |
| --------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------- |
| $property <span class="text-red-600">*</span> | `string` | —            | Имя свойства.                                                               |
| $start <span class="text-red-600">*</span>    | `list`   | —            | Список, содержащий начальные значения ширины экрана и переданного свойства. |
| $end <span class="text-red-600">*</span>      | `list`   | —            | Список, содержащий конечные значения ширины экрана и переданного свойства.  |

## Пример использования

<code-group>

  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;

  .element {
    @include more.use-fluid-prop('margin-block-end', (320px, 20px), (1280px, 60px));
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element {
    margin-block-end: clamp(20px, calc(20px + 40 * (100vi - 320px) / 960), 60px);
  }
  ```

  </code-block>

</code-group>

## Пример использования в качестве миксина высшего порядка

<code-group>

  <code-block label="SCSS" active>

  ```scss
  // setup.scss
  @use 'more-sass' as more;

  @mixin fluid-prop($property, $min, $max) {
    @include more.use-fluid-prop($property, (320px, $min), (1280px, $max));
  }

  // Другие файлы
  .element {
    @include fluid-prop('margin-block-end', 20px, 60px);
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element {
    margin-block-end: clamp(20px, calc(20px + 40 * (100vi - 320px) / 960), 60px);
  }
  ```

  </code-block>

</code-group>
