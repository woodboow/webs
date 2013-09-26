var http = require('http');
var url = require('url');
var fs = require('fs');
//var mime = require('./libs/mime')

var server = http.createServer(function(req,res){
	var req_path = url.parse(req.url).pathname.slice(1);
	fs.exists(req_path,function(exists){
		if(!exists){
			if(req_path=='todos' && req.method=='GET'){
				//...
				var todos = [{id:1,title:'todo1',done:false}
							,{id:2,title:'todo2',done:true}
							,{id:3,title:'todo3',done:true}];
			res.write(JSON.stringify(todos));
			res.end();
			}
		}
		console.log(req_path); //print how many file you required
		fs.readFile(req_path,'utf-8',function(err,fc){
			if(fc){
				var reg = /<%=.*%>/;
				if(reg.test(fc)){
					var result = reg.exec(fc);
					fc = fc.toString().replace(result[0],"hello jobs");
				}
				res.write(fc);
				res.end();
			}
		})
	});

	//res.write("Hello, World");
	//res.end();
});
server.listen(9432);

console.log("Server start...");