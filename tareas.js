
/* const input = document.querySelector ("input");
const addBtn = document.querySelector ("button");
const description= document.querySelector ("description");
const date = document.querySelector ("date"); */

function card () {
    const inputTarea = document.getElementById ("titulo-tarea").value;
    const inputDescription = document.getElementById ("exampleFormControlTextarea1").value;
    const inputDate = document.getElementById ("date").value;

    const cardFinal = document.getElementById ("tasksContainer");
    cardFinal.innerText = inputTarea + inputDescription + inputDate 

}


