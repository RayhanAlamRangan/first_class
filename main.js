
//Module----3 Assignment
// Ans------1 

let i=0;
text ='';

printObjectProperties={

firstName:"",
lastName:"",

fullName : function index(printObjectProperties){

for (0<i; i>5; i++){

  text+=printObjectProperties.firstName+printObjectProperties.lasName;

  console.log(text);
}

}


}

//Ans------2


text='';
function findMaxNumber(){

  const array1=[10, 20, 5, 30, 25];

  text+=array1[3];
console.log(text);


}


text='';
function fintMaxNumber(){

  const array1=[5, 15, 7];

  text+=array1[1];
console.log(text);


}

text='';
function finlMaxNumber(){

  const array1=[''];

  text+=array1[''];
console.log(text);


}


//Ans-------3

function mergeArrays(arr1,arr2){

let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=arr1+arr2;
console.log(arr3);

}

mergeArrays(0,0);

//Ans-----4

const index=(a,b)=>{



  let  a=5;
let b=5;

let c=a*b;

console.log(c);
}

const indexFax=(a,b)=>{



  let  a=8;
let b=8;

let c=a*b;

console.log(c);
}

//Ans--------5

function doubleNumbers(arg){

const array=[1, 2, 3, 4, 5];

array.map((arg)=>{

  let dem=[2,4,6,8,10];
  console.log(dem);
});




}

//Ans-----6



<p id="myCar"></p>


class MathUtility  {
  constructor(a,b) {
    let c=a*b;
    this.c = c;
  }
  static hello(x) {
    let d=2;
    let e=8;
    let f=8*2;
    return "f" + x.c;
  }
}

const myCarToyota = new MathUtility(3,5);
document.getElementById("myCar").innerHTML = MathUtility.hello(myCarToyota);

//Ans-----7

class Animal{

  constructor(name,sound){


    this.name=name;
    this.sound=sound;
    return name+sound;


  }


}


otheranymal= new Animal(Lion,Roar);

class Dog{

  constructor(name,sound){


    this.name=name;
    this.sound=sound;
    return name+sound;


  }


}

dog= new Dog(buddy,Woof);
















/*
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}


const para= document.querySelector("p");

para.addEventListener("click",updateName);

function updateName(){

  const name=prompt("Enter a new Name");
  para.textContent = 'player 1: ${name}';
}



document.addEventListener("DOMContentLoaded", () => {
  function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
});

document.addEventListener("DomContentLoaded" , () =>{
function createParagraph(){
  const para=document.createElement("p");
  para.textContent= "you clicked the button";
  document.body.appendChild(para);}
  const button= document.querySelectorAll("button");
  for(const button of buttons){
    button.addEventListener("click",createParagraph);}
  }
}

})
















navigator.geolocation.getCurrentPosition(function (position){

let lat=position.coords.latitute;
let long=position.coords.longitude;
document.write("Let="+lat+"<br/>");
document.write("Long="+lat+"<br/>");
});


<video  width="300"  height="300"   id="vid"></video>
navigator.mediaDevices.getUserMedia({

audio:true,
video:{

  facingMode:""
}


}).then(function (videodata){

  let vid=document.getElementById('vid');
  vid.srcObject=videodata;
}



);
let online=navigator.onLine;

document.write(navigator.useragent);


<button onClick="test()"></button>

function test(){

window.alert();
setTimeout(()=>{

alert("hello world");


},10000);

}




//4) Topic: Grade Calculator (JavaScript Switch Case)


let grade='90';



switch(grade=>90){


    case 0 :
        grade="Your Grade is A";

        break;

        case  1:
            grade="Your grade is B";
            break;

            case  2:
                grade="Your grade is C";
break;

            case 3:
                grade="Your grade is D";

}


console.log(grade);



//3) Topic: Multiplication Table Generator


let a=5*1;
let b=5*2;
let c=5*3;
let d=5*4;
let e=5*5;
let f=5*6;
let g=5*7;
let h=5*8;
let i=5*9;
let j=5*10;

console.log(j);

//2) Topic: Filter Even Numbers
function firstArray(){


    const car=[12,34,45,23,6,78,54,90];
    const model=[12,34,6,78,54,90];

console.log(car);
console.log(model);
    

}

firstArray();

//1) Topic: Online Store Discount Calculator (If-Else Statement)




// If the total purchase amount is less than $50, no discount is applied.

let tex='';
i=50;

if(i<=50){

    tex+="You have no Discount";
    console.log(tex);

}

else{


};

// If the total purchase amount is between $50 and $100 (both inclusive), apply a 5% discount.
let x=4000;
let y=30;
let z= (4000/30)*5;



if(price=>100){

z+="You have 5% Discount";
console.log(z);
}

else{

  
};

// If the total purchase amount is between $100 and $200 (both inclusive), apply a 10% discount.
let p=5000;
let l=30;
let k= (5000/30)*10;



if(price=>100){

k+="You have 10% Discount";
console.log(k);
}

else{

  
};

// If the total purchase amount is $200 or more, apply a 15% discount.


let r=6000;
let u=50;
let t= (6000/50)*10;



if(price=>200){

t+="You have 15% Discount";
console.log(t);
}

else{

  
};







console.log("hello java script");
console.log("hello world");
console.log("Rayhan full stack Mern developer");
//javascript Datatype


let length=12;
let weight=2.88;
let body=length+weight;
console.log(body);

let color="black";
let lastColor="White";
let fullColor=color+lastColor;

console.log(fullColor);

let d=true;
let e=false;

console.log(e);

const person={

    firstName:"Rayhan",
    lastName:"Alam",
    age:28,



}

console.log(person);


const car=["toyota","bmw","nissan"];

console.log(car[0]);





// javascript variable
var x=10;
var  y=30;
var z=x+y;

console.log(z);


let a=30;
let b=20;
let c=a+b;

console.log(c);


let firstName='Ali';
let lastName='amzad';
let fullName=firstName+lastName;

console.log(fullName);

let bigInt = BigInt("123456789012345678901234567890");
console.log(bigInt);

let m=80;
let n=90;
let o=80;

console.log(m==n);





//javascript if else condition




const hour= new Date() .getHours();
let greeting;

if(hour <18 ){

greeting="good day";




}

else{
    greeting="good evining";
}

console.log(greeting);





const time= new Date().getHours();
let result;

if(time <10 ){

result="good morning";
}
else if(time<20){

result="good day"
}

else if(time<25)

result="good evining";
else{
    result="good night";
}
console.log(result);



//javascript switchcase

let day;
switch (new Date().getDay()) {
    case 0:
      day = "Saturday";
      break;
    case 1:
      day = "sunday";
      break;
    case 2:
       day = "Monday";
      break;
    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
  }
console.log("Today is"+day);

let tex;
switch (new Date().getDay()) {
  case 6:
    tex = "Today is Saturday";
    break;
  case 0:
    tex = "Today is Sunday";
    break;
  default:
    tex = "Looking forward to the Weekend";
}

console.log(tex);


//javascript For Loop


let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

console.log(text);


const personIn = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += personIn[x] + " ";
}


console.log(txt);


//javascript whileloop

let texT = "";
let i = 0;
while (i < 10) {
  texT += "<br>The number is " + i;
  i++;
}

console.log(texT);




let texTi = ""
let s = 0;

do {
  texTi += "<br>The number is " + s;
  s++;
}
while (s < 10);  


console.log(texTi);

:
            grade="Your Grade is B";
            break;

            case 2:
                
            grade="your grade is c ";
            break;

            case 3:
                
            grade="your grade is d "
}



console.log(grade);

*/