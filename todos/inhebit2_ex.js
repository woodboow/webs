function extend( option ){
	function func(){};

	for(var i in option){
		func.prototype[i]=option[i];
	};
	return func;
}

var Product = extend({
	save:function(){},
	query:function(){}
});

var book = new Product();

console.log(typeof book.save==='function');