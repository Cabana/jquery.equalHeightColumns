# What is this?

Make columns equal height using a little jQuery.

# How to use it

```javascript
$(window).on('load resize', function() {

  $('.row').equalHeight({
    // options
  });

});
```

## Options

`columnsSelector: <string>`, a css selector matching the columns you wanna make equal height. Default is `.columns`.

`breakPoint: <integer>`, the width of the browser at which point the height is set to `auto`. For mobile. Default is `767`.
