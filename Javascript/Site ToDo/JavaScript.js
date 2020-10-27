var ToDos = JSON.parse(localStorage.getItem('ToDosList')) || [];
var ListOfToDos = document.querySelector('lu#ListOfToDos');
var inputElement = document.querySelector('input#inputToList');
var addButton = document.querySelector('button#addToList');

function storeTodos () {
    localStorage.setItem('ToDosList', JSON.stringify(ToDos));
}

function fillList(items, luElement) {
    ListOfToDos.innerHTML = '';

    for( item of items ) {
        console.log(ToDos);
        var liElement = document.createElement('li');
        var liInfo = document.createTextNode(item);

        var deleteBtt = document.createElement('a');

        deleteBtt.setAttribute('href', '#');

        var pos = items.indexOf(item);
        deleteBtt.setAttribute('onclick', 'deleteToDo(' + pos + ')');

        var linkText = document.createTextNode('Remove');

        deleteBtt.appendChild(linkText);

        liElement.appendChild(liInfo);
        liElement.appendChild(deleteBtt);

        luElement.appendChild(liElement);
    }
}

function add () {
    ListOfToDos.innerHTML = '';

    var item = inputElement.value;
    ToDos.push(item);

    fillList(ToDos, ListOfTodos);
    storeTodos();
}

function deleteToDo(pos) {
    ToDos.splice(pos, 1);
    fillList(ToDos, ListOfToDos);
    console.log(ToDos);
    storeTodos();
}

fillList(ToDos, ListOfToDos);
addButton.onclick = add;

