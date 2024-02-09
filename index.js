let a="HELLO";
console.log(a);

//functions
function demo(b){
    let a= 'down here';
    console.log(a + b);
}

demo(123);

// conditional statements
a=2;
if (a%2 == 0){
    console.log("EVEN")
} else if(a%2 == 1) {
    console.log("ODD");
} else {
    console.log("I don't know");
}

switch(a){
    case 0: console.log("EVEN");
            break;
    case 1 : console.log("ODD");
            break;
    case  2: console.log("EVEN");
            break;
    default : console.log("NOTHING");
            break;
}

let aa =4;
(aa%2==0 ? "EVEN" : "ODD") //ternary operator

// for loop,foreach loopband arrow functionw
arr1= new Array;
arr1=[5,6,7];
for(i in arr1){
    console.log(arr1[i]);
}

arr1.forEach((element,index,arr1) => {
    console.log(element+" element ,"+index+" index ,"+arr1+" array ");
});

// objects and spread
let obj1={a:12,b:14};
let obj2 ={...obj1,c:16}; //spread operator
type=typeof(obj1);
console.log(obj1.a + type);

let obj3=
{
    a:1,
    b:2,
    c:3,
    d:function(){
    console.log(this.a);
      }
}

obj3.d();

// event listener
// remove the comment when the js is attached to html file
// let boxfun= document.getElementById("box1");

// boxfun.addEventListener('click',()=>{
//     alert("You clicked the box!");
// })

// boxfun.addEventListener( 'mouseover' , ()=>{
//     boxfun.style.backgroundColor='red';
// })

// boxfun.addEventListener( 'mouseout' , ()=>{
//     boxfun.style.backgroundColor='white'; 
// })

//callback function

function f1(fun){
    console.log("function f1 invoked");
    fun();
}

function f2(){
    console.log("Function F2 Invoked");
}

f1(f2);

//arrow functs

let arrow = () =>{
    console.log('arrow function invoked');
}

arrow();

// using filter,map and reduce

a=[10,12,15,17]
let b=a.filter(x=> x%2==0) 
console.log(b);
let c=a.map(n=>{return n*2});
console.log(c);
let d= c.reduce((a,b)=> a+b);
console.log(d);

//destructuring array and split
a= new Array();
a.push([46]);
a.push(['John','Doe']);
[z,,]= a;
console.log(z);
console.log("elements in the array");

a.forEach(element => {
    console.log(element);
});

var str ="Hello World!".split(" ");
let [g1,g2]=str;
console.log(g1+","+g2);

//map object
let map = new Map();
map.set(3,"ll");
map.set(4,[11,22]);
map.set(5, {name:"John",age:36});
map.forEach(x=>{
    console.log(x);
})


// using set
let set= new Set();
set.add(3);
set.add(4);
set.add(3);
set.add("wilp");

set.forEach(v=>{
    console.log(v);
})

//promises

function prom(){
    let i=2;
    let j=3;
    
    return  new Promise((resolve,reject)=>{
        if((i+j)==5){
            resolve("success")
        }else{
            reject("failure")
        }
})
}

prom().then(a=>{
    console.log("finished")
}).catch(b=>{
    console.log("error occured")
})

async function fun(){
    let msg="async performed"
    return msg
}

let var1=fun()
console.log(var1);

//async and await

function walkdog(){
    return new Promise((resolve,reject)=>{
            let dogwalk=true

            if(dogwalk){
                resolve("dog walk task completed")
            } else{
                reject("dogwalk task not completed")
            }
    })
}

async function chores(){
    try{
        let dogwalkresult= await walkdog();
        console.log(dogwalkresult);
    } catch (e) {
        console.log(e);
    }
}
chores();