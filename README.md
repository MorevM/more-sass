[![Build status](https://github.com/MorevM/more-sass/workflows/Build/badge.svg)](https://github.com/MorevM/more-sass/actions?query=workflow%3ABuild)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The library of useful SCSS mixins and functions.

## Installation

Using `npm`:

```bash
npm install more-sass
```

Using `yarn`:

```bash
yarn add more-sass
```

## Usage

You can import the entire library or only the necessary part of it - variables, mixins, functions, or only a specific group of functions:

```scss
// Import the entire library
@use 'more-sass' as more;

// Import variables
@use 'more-sass/variables' as more-variables;

// Import mixins
@use 'more-sass/mixins' as more-mixins;

// Import functions
@use 'more-sass/functions' as more-functions;

// Import a specific group of functions
@use 'more-sass/functions/string' as more-string;

// Import a specific function in global namespace
@use 'more-sass/functions/string/str-split' as *;
```

## Documentation

[See the documentation](https://morevm.github.io/more-sass/).
