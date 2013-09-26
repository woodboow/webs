/*var o = {
	name:'jobs',
	age:55
};
o.company = "apple";
console.log(o);
console.log(o.name);

var jobs = new Object();
jobs.name = "jobs";
jobs.age = 55;
jobs.company = "apple";

console.log(jobs);
console.log(jobs.name);
*/

function Person (name,age){
	this.name = name;
	this.age = age;
}

// var jobs = new Person("jobs",55);
// console.log(jobs.name);
// console.log(jobs.age);
// console.log(jobs);
//node object.js

function callback(func){
	var a = "jobs";
	var b = 55;
	var c = new func(a,b);
	console.log(c);
}

callback(Person);
console.log(Person("shi",32));