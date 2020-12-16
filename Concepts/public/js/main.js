class Test {
    method() {

    }

    another() {
        var test;
    }
}

class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}

class ToDolist extends List{
    constructor() {
        super();

        this.user = 'Vitor';
    }

    showUser() {
        console.log(this.user);
    }
}

var MineList = new ToDolist();

document.getElementById('newToDo').onclick = function () {
    MineList.add('New ToDo');
}

MineList.showUser();

// class ToDolist {
//     constructor() {
//         this,todos = [];
//     }

//     static addToDo() {
//         this.todos.push('new ToDo');
//         console.log(this.lg)
//     }
// }

