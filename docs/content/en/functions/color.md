---
title: 'color'
description: 'More Sass - the library of useful SCSS mixins and functions.'
position: 100
fullscreen: false
---

Functions group for work with colors.

## hex-to-hsl

Converts HEX color value to HSL.

**Arguments:**

| Name       | Type   | Default | Description                                            |
|------------|--------|---------|--------------------------------------------------------|
| $hex*      | color  | —       | Color HEX value.                                       |
| $separator | string | comma   | The output list separator (space\|comma\|slash\|auto). |

**Returns:**

`list` - The list of HSL values structured of (hue, saturation, lightness).

**Example:**

```scss
@use 'more-sass' as more;
@debug more.hex-to-hsl(#ff0000); // list: 0deg, 100%, 50%
```

## hex-to-rgb

Converts HEX color value to RGB.

**Arguments:**

| Name       | Type   | Default | Description                                            |
|------------|--------|---------|--------------------------------------------------------|
| $hex*      | color  | —       | Color HEX value.                                       |
| $separator | string | comma   | The output list separator (space\|comma\|slash\|auto). |

**Returns:**

`list` - The list of RGB values structured of (red, green, blue).

**Example:**

```scss
@use 'more-sass' as more;
@debug more.hex-to-rgb(#ff0000); // list: 255, 0, 0
```

## shade

Mixes a given color with black.

**Arguments:**

| Name    | Type   | Default | Description                                        |
|---------|--------|---------|----------------------------------------------------|
| $color* | color  | —       | The original color.                                |
| $amount | number | 10      | Amount of the black color in the result color (%). |

**Returns:**

`color` - The result color of mixing the original color with black.

**Example:**

```scss
@use 'more-sass' as more;
@debug more.shade(#808080, 45); // color: #464646
```

## social-color

Retrieves a given social media brand color.

**Arguments:**

| Name     | Type   | Default | Description                                 |
|----------|--------|---------|---------------------------------------------|
| $social* | string | —       | Social media code ('vk', 'fb', 'tw', etc.). |

**Returns:**

`?color` - Social media brand color.

**Example:**

```scss
@use 'more-sass' as more;
@debug more.social-color('fb'); // color: #4267b2
```

> List of available codes:
> 
> `vk` - VKontakte  
> `fb` - Facebook  
> `ok` - Odnoklassniki  
> `yt` - YouTube  
> `tw` - Twitter  
> `ig` - Instagram (purple)  
> `ig-gradient` - Instagram (gradient)  
> `tg` - Telegram  
> `dr` - Dribble  
> `be` - Behance  
> `li` - Linked In  
> `wa` - WhatsApp  
> `vb` - Viber

## tint

Mixes a given color with white.

**Arguments:**

| Name    | Type   | Default | Description                                        |
|---------|--------|---------|----------------------------------------------------|
| $color* | color  | —       | The original color.                                |
| $amount | number | 10      | Amount of the white color in the result color (%). |

**Returns:**

`color` - The result color of mixing the original color with white.

**Example:**

```scss
@use 'more-sass' as more;
@debug more.tint(#808080, 45); // color: #b9b9b9
```
