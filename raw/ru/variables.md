# Переменные

> Библиотека содержит некоторые переменные, используемые в функциях и миксинах. Они также являются публично доступными и могут оказаться полезными в некоторых случаях.

## $font-styles

Список возможных значений для свойства `font-style`.

**Тип:** `list`

```scss
$font-styles: (
  'normal',
  'italic',
);
```

## $font-weights

Список возможных значений для свойства `font-weight`.

**Тип:** `list`

```scss
$font-weights: (
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  'bold',
  'bolder',
  'lighter',
  'normal',
  'inherit',
  'initial',
);
```

## $pseudo-elements

Список псевдо-элементов CSS.

**Тип:** `list`

```scss
$pseudo-elements: (
  '::before',
  ':before',
  '::after',
  ':after',
  '::backdrop',
  '::cue',
  '::cue-region',
  '::first-letter',
  ':first-letter',
  '::first-line',
  ':first-line',
  '::file-selector-button',
  '::grammar-error',
  '::marker',
  '::placeholder',
  '::selection',
  '::spelling-error',
  '::target-text',
);
```

## $units

Map-объект, содержащий единицы измерения, используемые в CSS. Ключами являются названия единиц измерения (тип `string`),
значениями - базовое числовое представление данной единицы измерения (тип `number`).

**Тип:** `map`

```scss
$units: (
  '%': 1%,
  'cqmin': 1cqmin,
  'cqmax': 1cqmax,
  'cqw': 1cqw,
  'cqh': 1cqh,
  'cqi': 1cqi,
  'cqb': 1cqb,
  'svmin': 1svmin,
  'svmax': 1svmax,
  'lvmin': 1lvmin,
  'lvmax': 1lvmax,
  'dvmin': 1dvmin,
  'dvmax': 1dvmax,
  'svw': 1svw,
  'svh': 1svh,
  'svi': 1svi,
  'svb': 1svb,
  'lvw': 1lvw,
  'lvh': 1lvh,
  'lvi': 1lvi,
  'lvb': 1lvb,
  'dvw': 1dvw,
  'dvh': 1dvh,
  'dvi': 1dvi,
  'dvb': 1dvb,
  'vmin': 1vmin,
  'vmax': 1vmax,
  'vw': 1vw,
  'vh': 1vh,
  'vi': 1vi,
  'vb': 1vb,
  'dpcm': 1dpcm,
  'dppx': 1dppx,
  'dpi': 1dpi,
  'px': 1px,
  'q': 1q,
  'pt': 1pt,
  'cm': 1cm,
  'mm': 1mm,
  'in': 1in,
  'pc': 1pc,
  'rem': 1rem,
  'rlh': 1rlh,
  'em': 1em,
  'lh': 1lh,
  'cap': 1cap,
  'ch': 1ch,
  'ic': 1ic,
  'ex': 1ex,
  'fr': 1fr,
  'ms': 1ms,
  's': 1s,
  'deg': 1deg,
  'grad': 1grad,
  'rad': 1rad,
  'turn': 1turn,
);
```
