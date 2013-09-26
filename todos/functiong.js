function func(name){
	this.name = name;
	this.sayHello = function(){
		console.log(this.name);
	};
};

console.log('Method 1:');
console.log('Before run func:');
//console.log(name);  Cannot run.
func('jobs');
console.log('After run func:');
console.log(name);
sayHello();

console.log('Method 2:');
var jobs = new func('jobs');
console.log(jobs.name);
jobs.sayHello();

console.log('Method 3:');
var gates = new Object();
func.call(gates,'gates');
console.log(gates.name);
gates,sayHello();

