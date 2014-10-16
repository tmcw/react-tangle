# react-tangle

A [tangle.js](http://worrydream.com/Tangle/)-style numeric input for React.js.

# api

**required**

```
<TangleText
  value={numeric value}
  onChange={function to be called on change} />
```

**optional**

```
  min={numeric value}
  max={numeric value}
  ratio={numeric value}
```

Ratio is a ratio of pixels moved by mouse versus change in the number.
