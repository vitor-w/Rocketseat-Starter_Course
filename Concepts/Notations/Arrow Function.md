# Arrow Function

This statement of function 'button => button.classList.remove('active')' is a shorthand of the arrow function '() => {}' 
(wich is a shorthand of the type declaration 'function () {}'), it's possible to use
that shorthand (argument => command) when it's just used one argument and just one line,
one command.

Other way to write the same function can be:
```js
(button) => {
    button.classList.remove('active')
}
```
or
```js
button => {
    button.classList.remove('active')
}
```
or
```js
function (button) {
    button.classList.remove('active')
}
```