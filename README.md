# Vuejs-typist

A component for Vue.js that simulates a real person typing and deleting their text.  

### Installation

```
yarn add vue-typist
# or
npm install --save vuejs-typist
```


## Usage

Import the component either locally..

```js
import vuejsTypist from 'vuejs-typist'

export default {
    components: {
        vuejsTypist
    }
}
```

.. or globally

``` js
import vuejsTypist from 'vuejs-typist'
Vue.use(vuejsTypist);
```

You can now use the ```<vuejsTypist />``` component. See the documentation for the supported options.

## Documentation
Option| Type| Default| Explanation
--- | --- | ---|  ---
words **(required)** | Array[String]| - | An array of words you want to be typed out.
type-interval | Number| 50 | The delay between each keystroke. In milliseconds.
pause-interval | Number| 2000 | The pause after a word has been typed and after it has been erased. In milliseconds.
human | Boolean | false| A changing delay between keystrokes which makes the typing feel more "human".

## License

This project is licensed under the MIT License - see the [license](LICENSE) file for details.

