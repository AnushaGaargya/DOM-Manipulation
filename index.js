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

list = document.getElementsByTagName("li")
console.log(list)


var odd = document.querySelectorAll('li:nth-child(odd)');
// var listitems = document.querySelectorAll(".list-group-item");
// console.log(listitems)
for(var i=0; i<=odd.length; i++){
   odd[i].style.color = 'green';
    }

