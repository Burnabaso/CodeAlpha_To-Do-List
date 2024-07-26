// Todo list add remove mark tasks complete
const deleteTask = document.querySelectorAll('.trashTask');
const taskForm = document.querySelector('#taskForm');
const newTask = document.querySelector('#usrinputTask');
const newDescription = document.querySelector('#usrinputDescription');
const mainContainer = document.querySelector('#maincontainer');
const finishTask = document.querySelector('#finishTask');
let count =0;

function taskDesign(task,description,count)
{
    const htmlDesign = `<div id = "taskcontainer${count}" class=" w-full bg-blue-300 text-white flex space-x-4 my-1">
                <div id="taskInfo" class="w-5/6">
                    <h3 class="text-3xl pl-2">${task}</h3>
                    <p id="description" class="pl-4 mt-1">${description}</p>
                </div>
            </div>`;
            return htmlDesign;
}
finishTask.addEventListener('click',()=>{
    mainContainer.firstChild.remove();
})
taskForm.addEventListener('submit', (Event) =>{
    count+=1;
    Event.preventDefault();
    const task = newTask.value;
    const description = newDescription.value;
    const htmlStructure = taskDesign(task,description,count);
    mainContainer.innerHTML+=htmlStructure;
    newTask.value = "";
    newDescription.value = "";
});
