let tasksList = [
    "Work",
    "Gym"
];

function getTasksList() {
    const tasksContainer = document.getElementById('tasksContainer');

    tasksContainer.innerHTML = "";

    tasksList.forEach((task, index) => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task_container');

        const taskText = document.createElement('p');
        taskText.textContent = task;

      


        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.onclick = function(){
            deleteTask(index)
        }

        
        taskContainer.appendChild(taskText);
        taskContainer.appendChild(deleteButton);
        

        tasksContainer.appendChild(taskContainer);
    });
}

function addTask() {
    let inputValue = document.querySelector("input").value;

    if (inputValue != "") {
        tasksList.push(inputValue);
        getTasksList() 
        document.querySelector("input").value = "";  
    }else{
        alert("there is no task to add")
    }
}

function deleteTask(index) {
    console.log(index);
    tasksList.splice(index, 1)
    getTasksList()
}

document.addEventListener('DOMContentLoaded', getTasksList);