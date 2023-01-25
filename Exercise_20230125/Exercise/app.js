//Adding a note
const todos = []; //empty array

const addInput = document.getElementsById('add-input');
const addBtn = document.getElementsById('add-btn');
const list = document.getElementById('list')


let currentNum = 1;


addBtn.addEventListener("click", () => {

    todos.push({
      id: currentNum,
      title: addInput.value,
    });
  
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  
    todos.forEach((todo) => {
      const todoItem = document.createElement("tr");
      const todoId = document.createElement("th");
      const todoTitle = document.createElement("th");
      const todoDelete = document.createElement("th");
      const deleteBtn = document.createElement("button");
  
      todoId.textContent = todo.id;
      todoTitle.textContent = todo.title;
      deleteBtn.textContent = "delete";
      deleteBtn.classList.add("btn", "btn-secondary");
      
      todoItem.appendChild(todoId);
      todoItem.appendChild(todoTitle);
      todoItem.appendChild(todoDelete);
  
      list.appendChild(todoItem);
    });

  addInput.value = "";
    currentNum++;
  });