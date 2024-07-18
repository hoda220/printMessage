 let b = document.querySelector("Button");
 let p = document.querySelector("p");
 let input = document.querySelector("input");
 b.onclick = function () {
     if(input.value != "") {
    p.innerHTML = input.value;
    // document.body.appendChild(p)
    input.value = ""
     }
    
 }