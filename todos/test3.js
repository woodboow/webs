function func(name){
	this.name = name;
	this.sayHello = function(){
		console.log(this.name);
	};
}
console.log("func.prototype: "+func.prototype);
console.log("func.__proto__: "+func.__proto__); 

func.prototype.save = function(){};

var jobs = new func('jobs');

console.log(typeof(jobs));
console.log("jobs.__proto__: "+jobs.__proto__);
console.log("jobs.prototype: "+jobs.prototype);