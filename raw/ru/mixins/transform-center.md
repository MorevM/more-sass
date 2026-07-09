# transform-center

> Позиционирует элемент по центру родительского элемента используя свойство transform.

<warning>

Не забудьте указать для родительского элемента значение свойства `position` отличное от `static`.

</warning>

## Параметры

—

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element {
  @include more.transform-center;
}
```

```css [Результат]
.element {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);
}
```

</code-group>
