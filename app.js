document.getElementById("message1").innerHTML = "Hello World";

let a = 5
var b = "Hello World";
const x = 10;

console.log(b);

add(5,10);
//function
function add(aa,bb){
   let cc = aa + bb;
   console.log(cc);
   return cc;
}

let result = add(5,10);

let add2 = function(aa,bb){
   let cc = aa + bb;
   console.log(cc);
}
let add3 = (aa,bb) => {
   let cc = aa + bb; 
   console.log(cc);

}
//Array
let arr =[1,"test",3.15,4,5];
const car = [];
car[0] ="toyota";
car[0] ="Honda";
let fruit = new Array("Apple","Banana","Cherry");

console.log(car[1]);

let colors =[[1,2,3], "green","bule"];
console.log(colors[0][2]);

//Array Method
fruit.push("Orange");
console.log(fruit);

arr.map((item) => {
   console.log(item);
});

//
let person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    child: ["Not"],
    fullname: function () {
        return this.firstname + " " + this.lastname;  
    }
 };
 
 console.log(person.fullname());  // Output: "John Doe"
 
person.address = {
   street:"123 main",
   city:"New York"
};
console.log(firstname);

const arrCombine =[...car, ...fruit];
const arrCombine2 =[car, fruit];
console.log(arrCombine);
console.log(arrCombine2);


if(x== 10){
   let c = "test"
var d = "test2";
console.log("a is equa to b");
}
//short
let e = x==10 ? "yes":"no";