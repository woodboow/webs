function Model(){
	this.name='Model';

	function func(){};
	func.prototype.add = function(){
		this.name='additem';
		console.log(this.name);
	};

	return func;
}

var Product = new Model();

var book = new Product();
book.add();

var Order = new Model();
var order = new Order();
order.add();