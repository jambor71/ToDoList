function newElement () {
var input = document.getElementById("myInput").value;
var newTask = document.createElement('li');
var t = document.createTextNode(input);
newTask.appendChild(t);
document.getElementById('tasks').appendChild(newTask);

}
