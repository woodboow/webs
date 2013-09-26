(function(g){
	var Person = function(name){
		this.name = name;
	}
	Person.prototype.sayHello = function(){
		return 'hi,'+this.name;
	};
	g.Person = Person;
}(global));

//exports.Person = Person;