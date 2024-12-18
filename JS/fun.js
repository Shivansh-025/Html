// let Name= "shiv"
// document.writeln(Name)
// var a;//declaretion
// console.log(a);
// var a;//declaration
// a=10;//initialization
// console.log(a);
// document.writeln(a)
// var a;//redeclaration
// a=20;// reinitialization
// console.log(a);
// document.writeln(a)
// var a=30;//redeclaration & reinitialization
// console.log(a)
// document.writeln(a)
// let b
// console.log(b)
// letb=10;
// console.log(b)
// let a=9.28;
// console.log(typeof a);
// let b ="hello";
// console.log(typeof b);
// let c ='hello';
// console.log(typeof c);
// let d=true;
// console.log(typeof d);
// let e=undefined;
// console.log(typeof e);
// let f=null;
// console.log(typeof f);
// console.log(typeof b);
// console.log(b.length);
// let str="Hello";
// console.log(str);
// console.log(str[0]);
// str[0]="X";
// console.log(str);
// let arr=[10,20,30,40];
// console.log(arr[2]);
// arr[2]=50;
// console.log(arr);
// debugger;
// console.log("Start");
// console.log(a)
// var b;
// var a=10;
// console.log(b)
// console.log(a,b);
// var c=100;
// var b=200;
// console.log(a,c);
// console.log("End");
// var a=function(){
//     console.log("Hello");
//     console.log("Shivansh Pandey");
// }
// a()
// debugger;
// function Parent(){
//     let money=500000;
//     console.log(money);
//     function Child(){
//         let Savings=5000;
//         console.log(Savings+money);
//     }
//     return Child();
// }
// let x = Parent();
// console.log(x);
// x()
// let str="HelloWorld";
// //slice(start index,end index)
// console.log(str.length);
// console.log(str.slice(0,4));
// console.log(str.slice(-10,-6));
// //substring(start index,end index)
// console.log(str.substring(0,4));
// //substr(start index,end index)
// console.log(str.substr(0,4));
// let str2="Hi everyone,Hi Js";
// console.log(str2);
// console.log(str2.replace("Hi","welcome"));
// console.log(str2.replaceAll("Hi","welcome"));



// let str3="Javascript";
// console.log(str3.toUpperCase());
// console.log(str3.toLowerCase());



// let str4="Hello";
// let str5="World";
// console.log(str4.concat(str5));


// let str6="        Webtech      "
// console.log(str6);
// console.log(str6.trimStart());
// console.log(str6.trimEnd());
// console.log(str6.trim());



// let phoneno="8400787757"
// console.log(phoneno);
// let extractedno=phoneno.slice(0,6);
// console.log(extractedno);
// console.log(extractedno.padEnd(10,"X"));
// console.log(extractedno.padStart(10,"X"));



// let str8="reactjs is a js library"
// console.log(str8.split(" "));


// let str9="Naman";
// console.log(str9.split("").reverse().join("").toLowerCase());



// //array
// // ! array literals
// let arr1=[10,20];
// // ! array constructor
// let arr2=new Array(10,20)
// console.log(arr1);
// console.log(arr2);

// // for loop

// let arr3=[9,8,7,6,5,4]
// for(i=0;i<arr3.length;i++)
// console.log(arr3[i],i);

// // for in and for off
// for(let i in arr3){
//     console.log(arr3[i],i);
// }
// for(let i of arr3){
// console.log(i);
// }
// ! array method
let arr1=[10,20,30,40];
// arr1.push(100);
// console.log(arr1);
// arr1.pop();
// console.log(arr1);
// let poppedelement=arr1.pop();
// console.log(poppedelement);
// arr1.unshift(200);
// console.log(arr1);
// arr1.shift()
// let removed=arr1.shift()
// console.log(removed);
// console.log(arr1);
// arr1.splice(1,0,"hello")
// console.log(arr1);




// let arr2=["hii","bye","welcome",500]
// console.log(arr2);
// arr2.splice(1,1);
// console.log(arr2);




// let arr3=[1,2,3,4,5,6];
// arr3.splice(2,2,500,800,700);
// console.log(arr3);




// let arr4=[9,8,7,6,5,4];
// console.log(arr4);
// let extractedarr=arr4.slice(1,4);
// console.log(extractedarr);
// console.log(arr4);



// let arr5=[1,2,3,4]
// let arr6=[5,6,7,8,9]
// let concatarr= arr5.concat(arr6,[10,11,12]);
// console.log(concatarr);


// let arr7=[1,2,3];
// console.log(arr7.indexOf(3));
// console.log(arr7.includes(1));



// let arr8=["hello","everyone"];
// console.log(arr8.toString());
// console.log(arr8.join(" "));



// let arr9=[10,11,12,13,14]
// arr9.forEach((ele,i,array)=>{
//     console.log(ele,i,array);
//     return "I am for each"
    
// })
// arr9.map((ele,i,array)=>{
//     console.log(ele,i,array);
    
// })
// let arr=[10,20,30,40];
// let val=arr.reduce((acc,ele) => {
//     console.log(acc,ele);
//     return acc+ele;
// });
// console.log(val);


// ! Objects
//! object literals 
// let obj1 ={
//     ename:" RAj",
//     id:1,
// };
// console.log(obj1);
// // object constructor
// let obj2=new Object({ename :"Raj",id:1});
// console.log(obj2);
// let obj={
//     ename:"Prasad",
//     id:1,
//     designation:"Trainer"
// };
// console.log(obj);



// //  read
// console.log(obj.ename);
// console.log(obj.designation);



// // update
// obj.designation="Developer";
// console.log(obj);
 

// // adding a new key value pair
// obj.location="Pune";
// console.log(obj);


// // Delete
// delete obj.id;
// console.log(obj);



// let person={
//     ename:"Prasad",
//     id:1,
//     company:"Qspiders",
//     hobbies:["cricket","football","hockey"],
//     friends:{
//         bestfriends:["Sarvesh","lavan","utkarsh","hemant"],
//     }
// };
// console.log(person.hobbies[1]);
// console.log(person.friends.bestfriends[2]);


// // object to array

// let obj3={
//     ename: "raj",
//     id:1,
//     designation:"developer",   
// };
// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));

// let arr=[10,20,[30,40,[100,200,[500,800]]]]
// console.log(arr[2][1]);
// console.log(arr[2][2][1]);
// console.log(arr[2][2][2][1]);


// let p

// Document Object Model( DOM )

// document.getElementById  ()

// let y = document.getElementById("shiv")
// console.log(y);
// console.log(y.textContent);

// // document.getElementById ()

// let x=document.getElementsByClassName("content")
// console.log(x);
// console.log(x[2]);
// console.log(x[2].textContent);


// document.getElementByTagname()
  

// let a=document.getElementsByTagName("h3");
// console.log(a);
// console.log(a[2]);
// console.log(a[2].textContent);

// // document.querySelector()


//  let b=document.querySelector("#shiv");
//  console.log(b);

//  let c= document.querySelector(".content")
//  console.log(c);


// //  document.querySelectorAll()
// let d=document.querySelectorAll(".content");
// console.log(d);


let h1= document.createElement("h1");
h1.textContent="Hello DOM";
console.log(h1);
document.body.appendChild(h1);

function abc(){
    console.log("button clicked");
}

function double(){
    console.log("double clicked");
}

function enter () {
    console.log("mouse enter");
}
function mousemove(){
    console.log("Mouse move");
}

function keypressed(){
    console.log("key is pressed");
}

 
 function keyreleased(){
    console.log("key is released");
    
 }
  let btn=document.createElement("button");
  btn.textContent="Submit";
  btn.addEventListener("click" , () =>{
    console.log("btn clicked");
  });
document.body.appendChild(btn);

let section=document.querySelector("section");
let article=document.querySelector("article");
let div=document.querySelector("div");

section.addEventListener("click",()=>{
    console.log("section");
    section.style.backgroundColor="green"
},1)
article.addEventListener("click",()=>{
    console.log("article");
    section.style.backgroundColor="blue"
},1)
div.addEventListener("click",()=>{
    console.log("div");
    section.style.backgroundColor="red"
},1)











