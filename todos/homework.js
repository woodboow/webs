//code of mine 1st section:
function fetch(str,function) {
	url=str;
	func=function;
};

var Orz = function(str){
	return{
		fetch:fetch
	}
}
//code of mine 1st section~


var models = Orz.fetch("date.xxx.cn",function(m){
	
	//code of mine 2nd section:
	size=this.size;
	//code of mine 2nd section~

	console.log(m);
});

console.log(models.size);

//http://xxxx.xx.xx/Orders/time=20130513
//Orz, ur company
//fetch()
//models return(models should have size)