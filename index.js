const lstelement  = document.getElementsByClassName("list-group-item");
lstelement[2].style.backgroundColor = "green";

for (let i=0; i<=lstelement.length; i++){
 
    s = (lstelement[i]).innerHTML;
    (lstelement[i]).innerHTML = s.bold();
   
  
}


// [...lstelement].forEach((element, index, array) => {
//     // do something
//     s = (lstelement[index]).innerHTML
//     (lstelement[index]).innerHTML = s.bold()
// });

list = document.getElementsByTagName("li")
console.log(list)

