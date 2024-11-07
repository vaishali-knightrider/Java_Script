console.log("Hey! Vaishali");

/*
let age=25;
age=50;

console.log(age);

const Student={
    fullName:"Vivek Kumar",
    age:29,
    cgpa:8.3,
    isPass:true,
};

console.log(Student["cgpa"]);


const Profile={
    name:"Sharddha Khapra",
    followers:569,
    following:4,
    posts:195,
    job:"enterpreneur",
};

console.log(Profile);

let a=55;
let b=6;
a*=2;
console.log("a+b= ",a+b);
console.log("a is ",a);


let x=10;
let y=12;

let cond1= x===10;
let cond2= x!==y;

console.log("cond1 && cond2",cond1 && cond2 );


let ageo=19;

if(ageo>=18)
{
    console.log("You can vote");
}


// to take user input 
let num=prompt("Enter a number");

if(num%5 === 0)
    console.log(num," is a multiple of 5");
else
    console.log(num, " Not a multiple of 5");


//Practice ques 2

let marks=prompt("enter the marks: ");
let grade;
if(marks>=80 && marks<=100)
    grade="A";
else if(marks>=70 && marks<=79)
    grade="B";
else if(marks>=60 && marks<=69)
    grade="C";
else if(marks>=50 && marks<=59)
    grade="D";
else
grade="F";

console.log("Grade is: ",grade);*/


//Loops

//for loop

/*
let n=prompt("Enter a number");
let sum=0;
for(let i=1;i<=n;i++)
{
    sum=sum+i;
}
console.log("sum is: ", sum);



for(let count=1;count<=5;count++)
{
    console.log("count : ", count);
}


//for-of loop

let s="Vaishali";
let len=0;
for(let i of s)
{
    len++;
}
console.log(len);

//for-in loop

let employee={
    name: "kirti",
    age:25,
    role:"Software Engineer"
}

for(let i in employee)
{
    console.log(i," ",employee[i]);
}



let gameNum=10;
let num=prompt("Guess the number :");

while(gameNum!=num)
{
    num=prompt("Guess the number again :");
}

console.log("Congratulations you got it right!");




//String

let str="Cat";
let s='Boy';

let old="Heelo dear";
let str2=old.toUpperCase();

console.log(old);
console.log(str2);


let str1="Vaishali";
//console.log(str1.slice(1,6));

console.log(str1.replace('s','i'));

//arrays

let marks=[97,45,66,32,76];
//console.log(marks);
//console.log(marks.length);
let total=0;
let len=marks.length;
for(let ind of marks)
{
    total+=ind;
}
avg=total/len;

console.log(`average is : ${avg}`);



let marks=[250,300,50,645,900];
let offer;
for(let i=0;i<marks.length;i++)
{
    console.log(`marks at index ${i} is ${marks[i]}`);
    offer=marks[i]/10;
    marks[i]-=offer;
    console.log(`marks at index ${i} is ${marks[i]}`);
}
console.log(marks);




let foodItems=["Pizza","Burger","Cake"];
foodItems.push("Chips");

console.log(foodItems);



//practice 

let companies=["Bloomberg","Microsoft","Uber","Google", "IBM","Netfix"];
console.log(companies);
let first=companies.shift();
console.log(first);
console.log(companies);

companies.push("Amazon");
console.log(companies);
companies.splice(2,1,"Ola");
console.log(companies);




// Lecture -5

function myFunc()
{
    console.log("I am writing a function here");
    console.log("This is the fifth vedio lecture of js");
}

myFunc();



function addsum(x,y)
{
    console.log("sum is :" ,x+y);
}


const Mult=(a,b)=>{
    console.log(a*b);
}



//Practice

function countVowels(str)
{
    let count=0;
    for(let ind of str)
    {
        if(ind=='a' || ind=='e' || ind=='i' || ind=='o' || ind=='u')
            count++;
        
    }
    console.log("count :", count);
}



const countVowels=(str) => {
    let count=0;
    for(let ind of str)
    {
        if(ind=='a' || ind=='e' || ind=='i' || ind=='o' || ind=='u')
            count++;
        
    }

    return count;
}



//For-Each loop

let arr=[1,2,3,4,5];

arr.forEach((val)=>
{
    console.log(val);
})



let aa=[4,6,8,10,12];

aa.forEach((val) =>{
    console.log(val*val);
});


let arr=[1,2,3,4,5];
let newArr=arr.map((val) =>{

    return val*2;
});

console.log(newArr);



//practice

let marks=[67,92,100,74,85,99];
let newA=marks.filter((val) =>{
    return val>90;
})
console.log(newA);

*/

let n=prompt("Enter a number");

let arr=[];

for(let i=1;i<=n;i++)
{
    arr[i-1]=i;
}
console.log(arr);
