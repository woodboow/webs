function func (name){
	this.name = name;
}
func.prototype.sayHello = function(){
	console.log(this.name);
};

var jobs = new func('jobs');
var jobs = new Object();
func.call(jobs,'jobs');
jobs.__prototype__=func.prototype;


func.prototype = {
	sayHello:function(){
		console.log("hi," + this.name);
	}
}

var gates = new func('gates');
console.log(jobs.sayHello===gates.sayHello);
jobs.sayHello();
gates.sayHello();