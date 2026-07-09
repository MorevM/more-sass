# transform-center

> Positions the element in the center of the parent element via transform property.

<warning>

Don't forget to set the parent `position` property other than `static`.

</warning>

## Arguments

—

## Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element {
  @include more.transform-center;
}
```

```css [Output]
.element {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);
}
```

</code-group>
