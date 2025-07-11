function renderTodoList() {
    let todoListHTML = '';


    todoList.forEach(function(todoObject , index) {
        const { name , date } = todoObject;
        todoListHTML += `
        <div>${index + 1}) ${name}</div>
        <div>${date}</div>
        <button 
        onclick="todoList.splice(${index} , 1);
        renderTodoList();"
        class="delete-button"
        >Delete</button>
        `;
    });
    document.querySelector('.js-todo-div').innerHTML = todoListHTML;
}
const todoList = [];

function addToDo() {
    const inputNameElement = document.querySelector('.js-name-input');
    const name = inputNameElement.value;

    const inputDateElement = document.querySelector('.js-date-input');
    const date = inputDateElement.value;

    todoList.push({
        name,
        date
    });

    inputNameElement.value = '';
    inputDateElement.value = '';
    renderTodoList();
}