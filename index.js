const lstelement  = document.getElementsByClassName("list-group-item");
// lstelement[2].style.backgroundColor = "green";

// for (let i=0; i<=lstelement.length; i++){
 
//     s = (lstelement[i]).innerHTML;
//     (lstelement[i]).innerHTML = s.bold();
   
  
// }


// [...lstelement].forEach((element, index, array) => {
//     // do something
//     s = (lstelement[index]).innerHTML
//     (lstelement[index]).innerHTML = s.bold()
// });

// list = document.getElementsByTagName("li")
// console.log(list)


// var odd = document.querySelectorAll('li:nth-child(odd)');
// var listitems = document.querySelectorAll(".list-group-item");
// console.log(listitems)
// for(var i=0; i<=odd.length; i++){
//    odd[i].style.color = 'green';
//     }

// parentnode property
var itemList = document.querySelector('#items');
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = "#f4f4f4";

// (itemList.children[0]).style.backgroundColor = "green"; 

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello World 1";
itemList.firstElementChild.style.backgroundColor = "yellow";
console.log(itemList.lastElementChild);
itemList.lastElementChild .textContent = "Hello World 4"; 
// console.log(itemList.lastElementChild);
var x  = document.querySelector("#items");
console.log(x.parentNode);
console.log(x.firstElementChild.nextElementSibling.previousElementSibling);
console.log(x.previousElementSibling);

var newhead = document.createElement('h1');
newhead.className = 'hellohead';
newhead.setAttribute('title', 'HelloWorld');
var newheadText = document.createTextNode('Hello World');
newhead.appendChild(newheadText);    
console.log(newhead);  

var container  = document.querySelector('body .card-body')
var h1 = document.querySelector('body h2');
container.insertBefore(newhead, h1)
  
  

