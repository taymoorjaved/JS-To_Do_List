
function onKeyUp(event){
    if(event.key === "Enter"){
        addTodo(event.currentTarget.value);
        event.currentTarget.value = "";                 
    }
}

function addTodo(desc){

    let todoList = document.getElementById('todo-list');


    //adding divs
    let main = document.createElement('div');
    let newDiv1 = document.createElement('div');
    let newDiv2 = document.createElement('div');
    let newDiv3 = document.createElement('div');

    //giving class to thoes divs
    main.classList.add("todo-item");
    newDiv1.classList.add("mark-done-icon");
    newDiv2.classList.add("desc");
    newDiv3.classList.add("delete");

    //putting elemnts in those divs
    newDiv1.innerHTML = "<i class='fa fa-circle-thin' onclick='markme(event)'></i>";
    newDiv2.innerHTML = desc;
    newDiv3.innerHTML = "<i class='fa fa-times-circle-o' onclick='hidme(event)'></i>";

    // appending those div in the exsisting html
    main.appendChild(newDiv1);
    main.appendChild(newDiv2);
    main.appendChild(newDiv3);
    todoList.appendChild(main);


}

function hidme(event){
    let todoItem = event.currentTarget;
    while(!todoItem.classList.contains("todo-item")){
        todoItem = todoItem.parentElement;
    }
    
    // z.classList.add("hidden");  // hide it
    todoItem.remove();  // remove it
    
}

function markme(event){

    let todoItem = event.currentTarget;
    while(!todoItem.classList.contains("todo-item")){
        todoItem = todoItem.parentElement;
    }

    let a = event.currentTarget;
    let tickmain = document.createElement('div');
    tickmain.classList.add("tick");
    tickmain.innerHTML = "<i class='fa fa-check' onclick='deleteme(event)'>";
    
    //todoList.appendChild(tickmain);

    //Instead do this:
    todoItem.parentNode.insertBefore(tickmain, todoItem.nextSibling);

    let b = a.parentElement;
    let c = b.nextSibling;
    c.classList.add("cross-me");    
}

function deleteme(event){
    event.currentTarget.parentElement.previousSibling.children[1].classList.remove('cross-me');
    event.currentTarget.parentElement.remove();
}
