# scroll-iv

Smooth cross browser scrollIntoView

# usage

``` js
var scrollIntoView = require('scroll-iv')

// This will smoothly scroll element into view in all browsers using cubic
// bezier animation.
scrollIntoView(domElement)

// you can change scroll speed:
var animation = scrollIntoView(domElement, {
  duration: 800 // milliseconds
})

// if you decide that you need to cancel animation:
animation.cancel()
```

Second function argument is compatible with [`amator` configuration](https://github.com/anvaka/amator#amator)
You can pass different easing functions:

``` js
scrollIntoView(domElement, {
  easing: 'ease' // default is ease. Possible values: <ease|easeIn|easeOut|easeInOut|linear>
})
```

# license

MIT
