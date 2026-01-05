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
//Update Button
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
