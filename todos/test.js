var Orz = {
	name:'Apple',
	say:function(){
		debugger;
		console.log(this.name);
	}
}

var doc = {
	name:'textBox1',
	do:function(func){
		//...
		func.call(Orz);
		func.apply(Orz);
	}
}

doc.do(Orz.say);