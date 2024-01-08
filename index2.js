// named funtion
function getName(){
    console.log("this is name");
}

getName();

//annnonymus function
var ref=function(){
    console.log("this is self invoking function or anonymus function");
}

ref();

(function(){
    console.log("this is self invoking function");
})

();
//arrow function
const arrowFunction=()=>{
    console.log("this is arrow function");
}

arrowFunction();



function  getPrice(){
    a=20;
    b=30;
    c=a+b;
    console.log(c);
}

getPrice();


var getRef=function(){
    d=50;
    e=10;
    f=d*e;
    console.log(f);
}

getRef();


const division=()=>{
    a=10.8776;
    b=2.876;
    c=a/b;
    console.log(c);
}

division();


function intilization(){
    city="mysore";
    console.log(city);
}
intilization();


function intilizations(citys){
    city=citys;
    console.log(city);
}
intilizations("gadag");


function intilization1(){
    college="mgm";
    console.log(college);
}

intilization1();

function intilizations(colleges){
   college=colleges;
   console.log(college);
}

intilizations("ppc");



function intilizing(){
    hospital="narayana";
    console.log(hospital);
}

intilizing();


function intilize(hospitals){
    hospital=hospitals;

}
intilize("vaidehi");
console.log(hospital);


function intilization2(){
    mobile="redmi";
    console.log(mobile);
}
intilization2();

function intilizations1(){
    watch="fasttrack";
    console.log(watch);
}
intilizations1();


function intilize1(states){
    state="karnataka";
    state=states;
    console.log(state);
}
intilize1("UP");




