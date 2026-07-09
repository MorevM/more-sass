# full-size

> Устанавливает для элемента размер, равный 100% размера его родительского элемента, и позиционирует его абсолютно.

<warning>

Не забудьте указать для родительского элемента значение свойства `position`, отличное от `static`.

</warning>

## Параметры

—

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element {
  @include more.full-size;
}
```

```css [Результат]
.element {
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  display: block flow;
  inline-size: 100%;
  block-size: 100%;
}
```

</code-group>
