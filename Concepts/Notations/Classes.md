# Classes

A class is a list of functions that can be used in other classes, by being inherited by other classes.     
That means this another class will be able to use the functions from the "parent" class.

It's useful for organization and to build a close envioremnt for a list of functions.

## Syntax
    ```js
        class 'name' {
            'function_name' ('argument or nothing') {
                'something here'
            }
            
            'function_name_1' ('argument or nothing') {
                'something here'
            }
            
            'function_name_2' ('argument or nothing') {
                'something here'
            } 
        }

    ```
    Another example, a class that has what is needed to build a spaceship

    ```js
        class buildSpaceShip {
            RoboticArms() {
                    this.state = true;
                    this.welderState = true;

                    'motorsAndstuff actions, turn on AI'
                }

            jointChassi() {
                
            }
        }

    ```
## Types of functions

 - **constructor()**
    The function 'constructor' has the property of being the first function to automatically run when the class is called.

    ### Syntax
        ```js
            class buildSpaceShip {
                constructor calibration() {
                    'actions/properties'
                }
            }
        ```
- **static()**
    The function 'static' has the property of being closed from the enviroment of the class, it means that it doesn't have access of other functions or variables created in it's class.

    ### Syntax
        ```js
            class buildSpaceShip {
                static mathEquation (x, y) {
                    'math'

                    return 'result'
                }
            }
        ```