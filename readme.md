# What is this?

Make columns equal height using a little jQuery.

## Dependencies

* jQuery library
* jQuery UI Core library
* Zurb Foundation CSS library

# Usage

```javascript
$(window).on('load resize', function() {

  $('.row').equalHeightColumns();

});
```

## Options

```javascript
$('.last-viewed-pages').lastViewedPages({

  columnsSelector: [string], // a css selector matching the columns you wanna make equal height. Default is `.columns`.

  breakPoint: [integer] // the width of the browser at which point the height is set to `auto`. For mobile. Default is `767`.

});
```

## Data params

- `equal-height-breakpoint` Where the breakpoint should be.
