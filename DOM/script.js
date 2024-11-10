//console.log("Hello!");

//console.dir(document.body);
/*
let button=document.getElementById("MyId");
console.dir(button);


let headings=document.getElementsByClassName("heading-class");
console.log(headings);
console.dir(headings);


let paras=document.getElementsByTagName("p");

console.dir(paras);



//Query-Selector

let firstElem=document.querySelector("p");
console.dir(firstElem);

let allElem=document.querySelectorAll("p");
console.dir(allElem);


let div=document.querySelector("div");
console.dir(div);

let h2=document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText=h2.innerText+"! from Apna College Students";

let divs=document.querySelectorAll(".box");
let i=1;
for(div of divs)
{
    div.innerText=`new value ${i}`;
    i++;
}


let div=document.querySelector("div");

div.style.backgroundColor="green";
div.style.backgroundColor="purple";

div.style.fontSize="26px";
div.style.color="white";

console.log(div);

let id=div.getAttribute("id");
console.log(id);

let n=div.getAttribute("name");
console.log(n);


let para=document.querySelector("p");
console.log(para.setAttribute("class","myClass"));

let c=para.getAttribute("class","new class");
console.log(c);



let newBtn=document.createElement("button");
newBtn.innerText="Click me!";
console.log(newBtn);

let div=document.querySelector("div");
div.append(newBtn);



let para=document.querySelector("p");



let div=document.querySelector("div");

div.onmouseover=()=>{
    console.log("this is my div");
}
*/

let btn1=document.querySelector("#btn1");

/*
btn1.onclick=(e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
}

btn1.addEventListener("click",()=>{
    console.log("The button 1 is clicked");
})

const FuncBut=()=>{
    console.log("The button 2 is clicked");
}
btn1.addEventListener("click",FuncBut);
   
btn1.addEventListener("click",()=>{
    console.log("The button 3 is clicked");
})

btn1.removeEventListener("click",FuncBut);

*/

let mode=document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body");
mode.addEventListener("click", ()=>{

    if (currMode==="dark")
    {
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }    
    else
    {
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }    
    console.log(currMode);
});
   





