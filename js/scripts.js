let listOfTodos = document.getElementsByClassName("listOfTodos").item(0);

let postTodoButton = document.getElementsByClassName("submitButton").item(0);
let newTodo = document.getElementsByClassName("newTodo").item(0);
postTodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    listOfTodos.append(createNewCheckboxWithLabel(newTodo.value));
    newTodo.value = null;
});

let deleteButton = document.getElementsByClassName("deleteButton").item(0);
deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    listOfTodos.replaceChildren();
});

let markAllButton = document.getElementsByClassName("markAllButton").item(0);
markAllButton.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i < listOfTodos.children.length; i++) {
        const todoElement = listOfTodos.children.item(i);
        const checkbox = todoElement.children.item(0);
        
        checkbox.ariaChecked = true;
        checkbox.checked = true;
    }
});

let clearButton = document.getElementsByClassName("clearButton").item(0);
clearButton.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i < listOfTodos.children.length; i++) {
        const todoElement = listOfTodos.children.item(i);
        const checkbox = todoElement.children.item(0);

        if(checkbox.checked) {
            todoElement.remove();
            i -= 1;
        };
    }
});

function createNewCheckboxWithLabel(labelText)
{
    let newCheckboxWithLabel = document.createElement("div");

    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.name = "todo";
    newCheckbox.outerText = labelText;

    let newCheckboxLabel = document.createElement("label");
    newCheckboxLabel.innerText = labelText;

    newCheckboxWithLabel.append(newCheckbox);
    newCheckboxWithLabel.append(newCheckboxLabel);

    return newCheckboxWithLabel;
}
