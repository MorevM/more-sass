# reset-button

> Сбрасывает стили элементов button.

## Параметры

—

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

button {
  @include more.reset-button;
}
```

```css [Результат]
button {
  inline-size: auto;
  margin: 0;
  padding: 0;
  color: currentColor;
  font: inherit;
  background: none;
  border: 0;
  box-shadow: none;
  appearance: none;
  user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
}
```

</code-group>
