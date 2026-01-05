// var divEl = document.getElementById("container"); 
// var h1El = document.createElement("h1");
// var h1Text = document.createTextNode("JS is created by Khatri");


// h1El.appendChild(h1Text);
// divEl.appendChild(h1El);
// console.log(h1El);

// Create To DO List

var ul = document.getElementById("ul");
var todolist = document.getElementById("todo-input");
var changeName = document.getElementById("Status");
var elementIDUpdate = null;

//Delete Function
function deleteitem(liID){
    console.log("List Item Id : ", liID);
    var targetLi = String(liID);
    var liTodelete = document.getElementById(targetLi)
    ul.removeChild(liTodelete);
}
//Edit Function
function updateItem(liID){
    console.log("List Item Id : ", liID);
    var targetLi = String(liID);
    var li = document.getElementById(targetLi);
    todolist.value = li.firstChild.nodeValue;
    // console.log(li.firstChild.nodeValue);
    changeName.innerHTML = "Update";
    changeName.removeAttribute("onclick");
    changeName.setAttribute("onclick","updateElItem()");
    elementIDUpdate = liID;
}
function updateElItem(){
    var li = document.getElementById(elementIDUpdate);
    li.firstChild.nodeValue = todolist.value;
    changeName.innerHTML = "Add Item"
    changeName.removeAttribute("onclick");
    changeName.setAttribute("onclick","addItem()");
    elementIDUpdate = null;
    todolist.value = '';
}

//Create Function
function addItem(){
    var li = document.createElement('li');
    var clickdelete = document.createElement("Button");
    var editBut = document.createElement("Button")

    var liText = document.createTextNode(todolist.value);
    var DelText = document.createTextNode("Delete Item");
    var ediText = document.createTextNode("Edit Item");
    var randomID = new Date().getTime();
    li.setAttribute("id",randomID);

    clickdelete.appendChild(DelText);
    editBut.appendChild(ediText);
    li.appendChild(liText);
    li.appendChild(clickdelete);
    li.appendChild(editBut);
    ul.appendChild(li);
    clickdelete.setAttribute("onclick","deleteitem(" + randomID + ")");
    editBut.setAttribute("onclick","updateItem(" + randomID + ")");
    todolist.value = "";
    
}

// var ul = document.getElementById("ul");
// var targetArea = ul.firstElementChild;
// var targetArea = ul.lastElementChild ;
// var targetArea = ul.firstElementChild.innerHTML;
// console.log(targetArea);

// var targetLi = document.getElementById("server-el");
// var targetArea = targetLi.previousElementSibling;  //target the above Element
// var targetArea = targetLi.nextElementSibling;  //target the below Element
// console.log(targetArea);

// var h3 = document.createElement('h3');
// var h3Text = document.createTextNode("I am H3 Element");
// h3.appendChild(h3Text);
// console.log(h3Text.nodeValue);  //nodeValue define text value not element
