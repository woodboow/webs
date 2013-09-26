/*var Todo = Backbone.Model.extend({
	initialize:function (name){
		this.name = name;
	},
	myMethod:function(){
		console.log('myMethod');
	}
});

var todo = new Todo('Todo1');
todo.set({done:false});
console.log(todo.get('done'));
console.log(typeof todo.save==='function');
console.log(todo.title);
todo.myMethod();
*/


var Todo = Orz.Model.extend({
	initialize:function (name){
		this.title = name;
	},
	myMethod:function(){
		console.log('myMethod');
	}
});

// var todo = new Todo('Todo1');

// console.log(typeof todo.save==='function');
// console.log(todo.title);
// todo.myMethod();

var Todo_View = Backbone.View.extend({
	el:$('#todoapp'),
	events:{
		'keypress #new_todo':'showtodo'
	},
	showtodo:function(e){
		if(e.keyCode != '13') return;
		alert($('#new_todo').val());
	}
});

var todo_view = new Todo_View();

$('#todo_template').append('Todo2');