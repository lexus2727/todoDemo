//select element for new task 
let newTask = document.getElementById('new-task');

//select element for add task button
let addTaskBtn = document.getElementById('addTask');

//select element for todo list ul
let toDoUl = document.querySelector(".todo-list ul");

//select element for completed tasks ul
let completeUl = document.querySelector(".complete-list ul"); //ul is inside div


//creating the actual task list item
let createNewTask = function(task) {
    console.log("Creating task...");
 
    //set up the new list item
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input"); //creating element for checkbox
    let label    = document.createElement("label"); //label created for task

    //pull inputted text into label
    label.innerText = task;

    //add type property for checkbox
    checkbox.type = "checkbox";

    //add items to the li element
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    return listItem;
}


