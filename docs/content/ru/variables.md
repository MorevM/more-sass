---
title: Переменные
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 300
category: Переменные
fullscreen: false
---

Библиотека содержит некоторые переменные, используемые в функциях и миксинах. Они также являются публично доступными и могут оказаться полезными в некоторых случаях.

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

Map-объект, содержащий единицы измерения, используемые в CSS. Ключами являются названия единиц измерения (тип `string`), значениями - базовое числовое представление данной единицы измерения (тип `number`).

**Тип:** `map`

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
