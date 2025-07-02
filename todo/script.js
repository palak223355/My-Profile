var btn = document.querySelector("#btn");
var main=document.querySelector(".main");

function add(){
var a = document.querySelector("#list");

if(a.value === ""){

	alert("Please enter something ");
}

else{
var p= document.createElement("p");
var btn2=document.createElement("button");
var p2=document.createElement("p");

function style(){

p2.style.textDecoration="line-through";
p2.style.opacity= "0.7";
}p2.addEventListener("click",style);

p2.innerText= a.value;
 btn2.innerText="delete";+
 +

main.appendChild(p);
p.appendChild(p2);
p2.classList.add("para2");
p.appendChild(btn2);
btn2.classList.add("button2");

p.classList.add("para");

function remove() {

	p.remove();
}


 btn2.addEventListener("click", remove);
}
} 


btn.addEventListener("click",add);