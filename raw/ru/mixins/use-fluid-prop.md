# use-fluid-prop

> Устанавливает равномерное масштабирование переданного свойства в указанных пределах в зависимости от ширины экрана.

См. [https://www.madebymike.com.au/writing/fluid-type-calc-examples/](https://www.madebymike.com.au/writing/fluid-type-calc-examples/).

<note>

Миксин оставлен для обратной совместимости.
Для нового кода рекомендуется использовать `use-fluid-value`: функция сохраняет значение внутри CSS-декларации,
поэтому лучше работает с редакторами, линтерами и другими инструментами, а также ближе к нативным CSS-функциям,
которые рано или поздно появятся в CSS.
Паттерн миксина или функции высшего порядка остаётся актуальным: используйте его, чтобы задать проектные
брейкпоинты и уменьшить шаблонный код.

</note>

## Параметры

<table>
<thead>
  <tr>
    <th>
      Имя
    </th>
    
    <th>
      Тип
    </th>
    
    <th>
      По умолчанию
    </th>
    
    <th>
      Описание
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      $property <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Имя свойства.
    </td>
  </tr>
  
  <tr>
    <td>
      $start <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        list
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Список, содержащий начальные значения ширины экрана и переданного свойства.
    </td>
  </tr>
  
  <tr>
    <td>
      $end <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        list
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Список, содержащий конечные значения ширины экрана и переданного свойства.
    </td>
  </tr>
</tbody>
</table>

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element {
  @include more.use-fluid-prop('margin-block-end', (320px, 20px), (1280px, 60px));
}
```

```css [Результат]
.element {
  margin-block-end: clamp(20px, calc(20px + 40 * (100vi - 320px) / 960), 60px);
}
```

</code-group>

## Пример использования в качестве миксина высшего порядка

<code-group>

```scss [SCSS]
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

```css [Результат]
.element {
  margin-block-end: clamp(20px, calc(20px + 40 * (100vi - 320px) / 960), 60px);
}
```

</code-group>
