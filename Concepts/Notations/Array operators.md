# Array Operators
    There are Four operators to apply in arrays, they make it easier, faster and cleaner the process of interacting with them.

## map()
    `map()` goes through every item in the array, therefor it makes possible to apply changes in each item;

### Syntax
    ```js
        const arr = [1, 2, 3, 5];

        const newArr = arr.map(function(item, index) {
            return item * index; //this multiply the item with it's index
        });

        console.log(newArr);

        //console log == [0, 2, 6, 15];
    ```

## reduce()
C:\Users\vitor\AppData\Roaming\Google\Documents\Evolving\Coding\Starter course\ES6+\Concepts