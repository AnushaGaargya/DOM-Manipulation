lstelement  = document.getElementsByClassName("list-group-item")
lstelement[2].style.backgroundColor = "green"

for (let i=0; i<=lstelement.length; i++){
  var string = lstelement[i].innerHTML
  lstelement[i].innerHTML = string.bold()
  
}

