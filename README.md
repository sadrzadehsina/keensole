# Keensole
[![Browser Support Status](https://badges.herokuapp.com/browsers?googlechrome=%5E27&firefox=%5E31&iexplore=%5E9)](https://badges.herokuapp.com/browsers?googlechrome=%5E27&firefox=%5E31&iexplore=%5E9)

It does a very simple thing, extends `console.log` functionality in a funny way. It adds a few helper functions to make your message interesting!

![Alt text](screenshot.png?raw=true "Title")

## Let's see how

It follows a very simple instruction. Just chain as many functions as you need to get to your desire output. For instance if I want to show there is something wrong in a piece of code I will follow below command.

```javascript
keensole.error().log('Oops, something went wrong!');
```

Or in case of showing a successful message in upper case, following command is a choice.

```javascript
keensole.success().upper().log('Great, it works like a charm!');
```

You see, you should start with `keensole` and end with `log` with a message as the parameter passed to it. Between these, you are free to use as many helper function as required.

For a list of available functions see [the table below](https://github.com/neacodin/keensole#available-helper-functions)

### Prerequisites

It is a dependency free library. It means you don't need to include libraries like `jquery` or `underscore` to make it work. But we don't promise that it continues like this 😄

### Installing

You can install this package either with `npm` or with `bower`.

#### npm
```bash
npm install keensole --save
```
Then add a `<script>` to your index.html:
```html
<script src="/node_modules/keensole/dist/keensole.js"></script>
```

#### bower
```bash
bower install keensole --save
```
Then add a `<script>` to your index.html:
```html
<script src="/bower_components/keensole/dist/keensole.js"></script>
```

## Available Helper Functions

Available functions are splited into **four** different categories.

#### Colors

| Name   | Function |
| ------ | -------- |
| red    | Changes the text color to red    |
| green  | Changes the text color to green  |
| yellow | Changes the text color to yellow |

#### Themes

| Name     | Function |
| ------   | -------- |
| error    | An error theme with a white foreground color and a red background color      |
| success  | A success theme with a white foreground color and a green background color   |
| warning  | A warning theme with a black foreground color and an orange background color |
| info     | An info theme with a black foreground color and a gray background color      |

#### Typography

| Name        | Function |
| ------      | -------- |
| underline   | Underlines the message |
| lineThrough | Adds a line throughout the given message |
| overline    | Overlines the message |
| small       | Changes font size of the given message to small which is 10px |
| medium      | Changes font size of the given message to medium which is 14px |
| large       | Changes font size of the given message to medium which is 18px |
| bold        | Makes the given message bold |
| italic      | Makes the given message italic |

#### Functions

| Name      | Function |
| ------    | -------- |
| reverse   | Reverses the given message |
| lower     | Makes all letters of a message lower case |
| upper     | Makes all letters of a message upper case |

## Contributing

We really appreciate any contributation to make it more useful. As a collaborator once you clone the repository you need to run `npm install` to install required development dependencies.

Since we are using EcmaScript 6 (the great ES6😍), we use `babel` to translate it to ES5. So you need to run a very simple gulp task called `build` each time you change the source and you want to see your changes. Just run `gulp build`.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/neacodin/keensole/tags). 

## Authors

* **Sina Sadrzadeh** - [Github Profile](https://github.com/sadrzadehsina)
* **Masoud Mirzaei** - [Github Profile](https://github.com/mamos98)


See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE.md](LICENSE.md) file for details
