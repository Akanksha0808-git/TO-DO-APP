var todos = document.getElementById("listodo");
var newitem = document.createElement("div")
var todoHeading = document.createElement("h1");
var add_button = document.createElement("button");
var close_button = document.createElement("button");
var todoDes = document.createElement("input");
let blurr = document.getElementById("main-container")

newitem.setAttribute("class", "popup")
var count = true;

var list = document.getElementsByClassName('list')[0];
list.addEventListener("click", function () {
  if (list.innerHTML.includes("BACK")) {
    goToArrow();
  }
});
function addnewitems() {
  if (count) {
    todos.appendChild(newitem);
    newitem.appendChild(todoHeading)
    newitem.appendChild(add_button)
    newitem.appendChild(close_button)
    newitem.appendChild(todoDes)
    //  todoHeading,setAttribute("id","head")        
    add_button.setAttribute("class", "button addbutton")
    add_button.setAttribute("onclick", "addcard()")
    close_button.setAttribute("class", "button closebutton")
    todoHeading.innerHTML = "Add new list";
    todoHeading.setAttribute("class", "head")
    todoDes.setAttribute("type", "text");
    todoDes.setAttribute("id", "text");
    todoDes.style.textAlign = 'center';
    add_button.innerHTML = "ADD";
    close_button.innerHTML = "Close";
    count = false;
    blurr.style.filter = 'blur(10px)'
  }
}

//--------------close button  function-------------------
close_button.addEventListener('click', () => {
  todos.removeChild(newitem);
  blurr.style.filter = 'none'
  count = true;
})


//---------------for new page on the click of add button------------------------
var invisible_text = document.querySelector('.invisible-text');
var todocount = 0;


function addcard() {
  var dibba = document.getElementById("todos");
  var hr = document.createElement("hr");
  var h2 = document.createElement("h2");

  h2.setAttribute("id", "h2")
  var button3 = document.createElement("button");
  button3.setAttribute("class", "buttons button3");
  var button4 = document.createElement("button");
  button4.setAttribute("class", "buttons button4");
  button4.setAttribute("onclick", `addNewItems(${todocount})`);
  var box1 = document.createElement("div");
  box1.setAttribute("class", `box box${todocount++}`);

  var headings = document.createElement("h4")
  headings.setAttribute("id", "h4")
  headings.setAttribute('onclick', 'newpage(this)')

  //appending childs to their parent
  dibba.appendChild(box1);
  box1.appendChild(headings);
  box1.appendChild(hr);
  box1.appendChild(button3);
  box1.appendChild(button4);
  button3.setAttribute('onclick', 'deletecard(this)')
  button3.innerHTML = "<i class='fa-solid fa-bucket' onclick='deletecard(this)'></i>";
  button4.innerHTML = " <i class='fa-solid fa-circle-plus'></i>";

  //giving values
  var input = todoDes.value;
  headings.innerHTML = `${input}`

  invisible_text.remove();
  todos.removeChild(newitem);
  blurr.style.filter = 'none'
  count = true;

}

function addNewItems(items) {


  todos.appendChild(newitem);
  newitem.appendChild(todoHeading);
  newitem.appendChild(add_button);
  newitem.appendChild(close_button);
  newitem.appendChild(todoDes);
  add_button.setAttribute("class", "button addbutton");
  add_button.setAttribute("onclick", `addcarditems(${items})`);
  close_button.setAttribute("class", "button closebutton");
  todoHeading.innerHTML = "Add new items";
  todoHeading.setAttribute("class", "head");
  todoDes.setAttribute("type", "text");
  todoDes.setAttribute("id", "text");
  todoDes.style.textAlign = 'center';
  add_button.innerHTML = "ADD";
  close_button.innerHTML = "Close";
  count = false;
  blurr.style.filter = 'blur(10px)';
}




function addcarditems(items) {

  var container5 = document.querySelector(`.box${items}`);
  var h3 = document.createElement('h3');
  var text = document.getElementById('text').value;
  h3.innerHTML = `${text}   <button id='done' onclick='underline(this)'>DONE</button>`;

  container5.appendChild(h3);
  container5.style.minHeight = "300px"; // Set a minimum height
  // or
  container5.style.height = "auto";
  todos.removeChild(newitem);
  blurr.style.filter = 'none'
  count = true;


}
function deletecard(button) {
  var box = button.parentNode.parentNode;
  box.parentNode.removeChild(box);

  checkNoItem();
}

function checkNoItem() {
  var boxes = document.getElementsByClassName('box');

  if (boxes.length === 0) {
    displayNoItemMessage(); // Call the function to display the "No item in the list" message
  }
}
function displayNoItemMessage() {
  invisible_text.style.display = "block"; // Show the "No item in the list" message
}

function underline(button) {
  var h3 = button.parentNode;
  h3.style.textDecoration = "line-through";
}

//..................function for click on heading in dibba2--------------




function newpage(h4) {
  var list = document.getElementsByClassName('list')[0];
  var backButtonClicked = (list.innerHTML === "BACK");

  if (!backButtonClicked) {
    list.innerHTML = "<i class='fa-solid fa-circle-arrow-left'>BACK</i>";
    list.setAttribute("onclick", "goToArrow()"); // Add an onclick event handler to the "BACK" button
    list.removeEventListener("click", addnewitems); // Remove the previous event listener
    list.addEventListener("click", goToArrow); // Add a new event listener for the "BACK" button
    //   var blank = document.getElementById('blank');
    //   blank.innerHTML = h4.innerText;

    var add = document.getElementsByClassName('add')[0];
    add.innerHTML = "<i class='fa-solid fa-circle-plus' onclick='addnewitems()'></i>";

    var box = h4.parentNode;
    var boxes = document.getElementsByClassName('box');
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i] === box) {
        boxes[i].style.display = "block"; // Display the selected box
      } else {
        boxes[i].style.display = "none"; // Hide other boxes
      }
    }
  }


}

// Call the checkNoItem function initially to handle the initial state
checkNoItem();
function goToArrow() {
  var list = document.getElementsByClassName('list')[0];
  var backButtonClicked = (list.innerHTML.includes("BACK"));

  if (backButtonClicked) {
    var boxes = document.getElementsByClassName('box');
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].style.display = "inline-block"; // Change display property to inline-block
    }
    var container2 = document.getElementById('todos');
    container2.style.display = "flex"; // Set display property to flex
    container2.style.justifyContent = "space-around"; // Add justify-content property

    var dibba2 = document.getElementById('dibba2');
    dibba2.style.display = "none"; // Hide the container for individual tasks

    list.innerHTML = "Tasks List";
    var addItems = document.getElementById('add-items');
    addItems.innerHTML = "<img src='./img/icons8-plus-50.png' alt='img Here' id='image1' onclick='addnewitems()'><div class='additem-text'>Add Items</div>";

    list.innerHTML = "<h1 class='Task'>Task</h1><span class='List'>List</span>";

    var blank = document.getElementById('blank');
    blank.innerHTML = '';
    list.addEventListener("click", function () {
      // This will be executed when the 'list' element is clicked
      // Here you can put whatever code should be run when the element is clicked
      // For example, you could call your 'addnewitems' function
      if (list.innerHTML !== "BACK") {
        addnewitems();
      } else {
        // If 'list' element's innerHTML is 'BACK', it means you're in the 'individual task' view, 
        // so call the 'goToArrow' function to return to the list of tasks
        goToArrow();
      }
    })
    var add = document.getElementsByClassName('add')[0];
    add.innerHTML = "<i class='fa-solid fa-circle-plus' onclick='addnewitems()'></i>Add Item";
  }
}




