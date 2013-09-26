var new_todo=$('#new_todo');
var todo_list;
var todo;
var todo_item;
var todo_template=$('#todo_template').html();

new_todo.bind('keypress', function(e) {
	if(e.keyCode!='13')
		return;
	if(e.keyCode=='13'){
		todo=new_todo.val();
		todo_list=$('#todo_list');
		todo_item=$.tmpl(todo_template,{title:todo});
		todo_list.append(todo_item);
	}
});


var todo_check=$('li .view input');
var todo_edit=$('li .view label');
var check_state;

todo_check.bind('click', function(){
	check_state=this.checked?'done':'';
	$(this).parent().parent().attr('class', check_state);
});

todo_edit.bind('dblclick', function(){
	$(this).parent().parent().attr('class', 'editing');
});

$.ajax({
	method:'GET',
	url:'/todos',
	success:function(data){
		var result=JSON.parse(data);
		console.log(result);
	}
})

// var req = new XMLHttpRequest();
// req.open('GET', '/todos',false);
// req.onreadystatechange = function(){
// 	if(req.readyState==4 && req.status==200){
// 		var result = req.responseText;
// 		var node = JSON.parse(result);
// 		console.log(node);
// 	}
// };
// req.send(null);