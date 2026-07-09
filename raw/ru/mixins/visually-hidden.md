# visually-hidden

> Визуально скрывает элемент, но оставляет его доступным.

## Параметры

—

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element {
  @include more.visually-hidden;
}
```

```css [Результат]
.element {
  position: absolute;
  z-index: -1;
  inline-size: 1px;
  block-size: 1px;
  margin: -1px;
  padding: 0;
  white-space: nowrap;
  border: 0;
  overflow: hidden;
  clip-path: inset(50%);
}
```

</code-group>
