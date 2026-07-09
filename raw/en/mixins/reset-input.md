# reset-input

> Resets default styles of input elements.

## Arguments

—

## Example

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

input {
  @include more.reset-input;
}
```

```css [Output]
input {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  box-shadow: none;
  appearance: none;
}
```

</code-group>
