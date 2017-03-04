# react-tangle

A [tangle.js](http://worrydream.com/Tangle/)-style numeric input for React.js.


# how to use

Install it from this GitHub repository directly:

```
npm install --save fiatjaf/react-tangle
```

then use it:

```js
const TangleText = require('react-tangle')
```

# api

**required**

```
<TangleText
  value={numeric value}
  onChange={function to be called on change} />
```

**optional**

```
onInput={function}
className={string, default 'react-tangle-input'}
style={object}
min={numeric, default -Infinity}
max={numeric, default Infinity}
step={numeric, default 1}
pixelDistance={numeric, default 1}
format={function, function(x) { return x; }}
disabled={boolean, default false}
```

Step is a ratio of pixels moved by mouse versus change in the number.

Up/Down arrows increment the value by the step value.

Pixel distance is the number of pixels the mouse has to travel before
incrementing by `step`.

## See Also

* [react-number-editor](https://github.com/tleunen/react-number-editor)
