function Model(name){
	
}
Model.prototype = {
	contructor:Model,
	save:function(){},
	query:function(){}
};

function Product(){
	
};

function extend(parent,child){
	//复制继承: 
	for(var pro in parent.prototype){
		child.prototype[pro]=parent.prototype[pro];
	}
	child.prototype.contructor=child;
};

extend(Model,Product);

var book = new Product();
console.log(typeof book.save==='function');

