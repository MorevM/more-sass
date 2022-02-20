![Stability of "master" branch](https://img.shields.io/github/workflow/status/MorevM/more-sass/Build/master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Last commit](https://img.shields.io/github/last-commit/morevm/more-sass)
![Release version](https://img.shields.io/github/v/release/morevm/more-sass?include_prereleases)
![GitHub Release Date](https://img.shields.io/github/release-date/morevm/more-sass)
![Keywords](https://img.shields.io/github/package-json/keywords/morevm/more-sass)

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
