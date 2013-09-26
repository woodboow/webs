function bind (name,func) {
	var a=name;
	var b=55;
}

var $ = function(name){
	//..
	return {
		bind:bind
	}
}

$('#todo_list').bind( "click", function(name, age){}{
	console.log({name:name,age:age});
});