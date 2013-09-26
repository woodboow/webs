/* Section 1:
function callback(){
	function func(name){
		console.log(name);
	};
	return func;
};

var f = callback();
f('jobs');
*/

/*Section 2:
function setup(num){
	var count = num;
	return function(){
		count = count + 1;
		return count;
	}
}

var increase = setup(3);
var current = increase();
console.log(current);
*/

/*Section 2: */
function Model(){
	var klass = function(){
		this.init.apply(this,arguments);
	};
	klass.prototype = {
		init:function(name){
			this.name = name;
		},
		save:function(){},
		destroy:function(){},
		query:function(){},
		constructor:klass
	}
	return klass;
};

var Product =new Model();

var js = new Product('js');
console.log(js.name);

var Order = new Model();
var order = new Order();

js.save();
order.query();