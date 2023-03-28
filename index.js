
const dateElement = document.getElementById("current-date");

const options = { weekday: "long", year: "numeric", month: "2-digit", day: "2-digit" };
const currentDate = new Date().toLocaleDateString("en-US", options);

dateElement.innerText = currentDate;

const datemodi = {weekday: "long", year: "numeric"};
const currentd = new Date();
console.log(currentd);


let addToDobtn = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDobtn.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    paragraph.classList.add('paragraph-styling'); // add the class to the paragraph
    toDoContainer.appendChild(paragraph); // append the paragraph to the container
    inputField.value='';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

})


