var Aufz: number = 3; 
var count:number =3;
function z(): void {
  document.getElementById("z").innerText = "Es gibt " + Aufz + " offene Aufgaben!";
}
function addListItem(): void {
  
  var c:string = count.toString();
  //create listitem
  var list: HTMLLIElement = document.createElement("li"); 
  list.value = Aufz;
  list.id = c;                      
  document.getElementById("listItems").appendChild(list);               
  //create checkbox
  var checkbox: HTMLInputElement = document.createElement("input");
  checkbox.type = "checkbox";
  //append checkbox to listitem
  list.appendChild(checkbox);
  //get value for new task                                    
  var inputValue: string = document.getElementById("inputValue").value;    
  //create textNode for new task
  var text: Text = document.createTextNode(inputValue);               
  //append to list
  list.appendChild(text);                                         
  //add delete icon and css
  var icon: HTMLElement = document.createElement("i");
  icon.className = "loeschen fas fa-trash-alt";                             
  //append icon
  list.appendChild(icon);                                       
  Aufz++;
  z();
  icon.addEventListener("click", function() {document.getElementById(c).innerHTML=""; Aufz--; z(); });
  count++;
}

function removeListItem(listItem: number): void {

  var Item = document.getElementById("listItems");
  if (Item.hasChildNodes()) {
    document.getElementsByTagName("li")[listItem].innerHTML="";
  }
  Aufz--;
  z();
}

window.addEventListener("load", function () {

  document.querySelectorAll(".loeschen")[0].addEventListener("click", function() {removeListItem(0); });
  document.querySelectorAll(".loeschen")[1].addEventListener("click", function() {removeListItem(1); });
  document.querySelectorAll(".loeschen")[2].addEventListener("click", function() {removeListItem(2); });
  

});