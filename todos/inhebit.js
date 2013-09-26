function extend(parent,child){
	//原型继承:
	function F (){};
	F.prototype = parent.prototype;
	child.prototype = new F();
	child.prototype.constructor = child;
};

function Model(name){
	this.name=name;
}
Model.prototype = {
	contructor:Model,
	save:function(){},
	query:function(){}
};

function Product(){
	Model.apply(this,arguments);
};

extend(Model,Product);

var book = new Product();
console.log(typeof book.save==='function');

var pen = new Product('pen');
console.log(pen.name);