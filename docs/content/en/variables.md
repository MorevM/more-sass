---
title: Variables
description: More Sass - the library of useful SCSS mixins and functions.
position: 300
category: Variables
fullscreen: false
---

The library includes some variables used in functions and mixins. They are also publicly available and can be useful in some cases.

## $font-styles

The list of available values of the `font-style` property.

**Type:** `list`

```scss
$font-styles: (
	'normal',
	'italic',
);
```

## $font-weights

The list of available values of the `font-weight` property.

**Type:** `list`

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

The list of CSS pseudo-elements.

**Type:** `list`

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

The map-object of CSS units. Keys are the units names (type `string`) and values are the base numeric value of this units (type `number`).

**Type:** `map`

```scss
$units: (
	'%': 1%,
	'px': 1px,
	'pt': 1pt,
	'cm': 1cm,
	'mm': 1mm,
	'in': 1in,
	'pc': 1pc,
	'em': 1em,
	'rem': 1rem,
	'ch': 1ch,
	'ex': 1ex,
	'vh': 1vh,
	'vw': 1vw,
	'vmin': 1vmin,
	'vmax': 1vmax,
	's': 1s,
	'ms': 1ms,
	'deg': 1deg,
	'grad': 1grad,
	'rad': 1rad,
	'turn': 1turn,
	'dpi': 1dpi,
	'dpcm': 1dpcm,
	'dppx': 1dppx,
);
```
