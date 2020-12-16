# const

Is a type o variable that cannot have it's value changed.

## Syntax
    ```js
        const a = 1;
    ```

# let

Is a type o variable that it's referenciation just stays inside the scope `{}` it is created.

## Syntax
    ```js
        function test () {
            let a = 1;
            // 'a' can just be referenced inside this function escope
            if( a == 1 ) {
                // 'a' can be referenced inside here
                a = 2;
            }
        }

        a = 2; == "error"
    ```