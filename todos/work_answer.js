var Orz = {
	fetch:function(url,func){
		//...
		var models = [{title:'todo1'},{title:'todo2'}];
		for(var index = 0;index < models.length; index++){
			func(models[index]);
		}
		return{
			models:models,
			size:models.length
		}
	}
}


var models = Orz.fetch("date.xxx.cn",function(m){
	
	console.log(m);
});

console.log(models.size);