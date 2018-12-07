# get-non-native-properties-on-window
Get manually added properties on the `window` object.
The idea is from this [stackoverflow answer](https://stackoverflow.com/a/17246535).

We create a iframe, and compare properties of the current window to iframe's window, filter the properties that exists on the current window but not on iframe's window. So these properties are added by thirdparty scripts.
### Install
```
npm i get-non-native-properties-on-window
```

### Usage
```
const getCustomProps = require('get-non-native-properties-on-window');
const props = getCustomProps();
```
