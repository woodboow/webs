function func (arg){
	console.log(this.name);
	console.log(arg);
}

jobs = {
	name:'jobs',
	say:func
}

func.call({name:'twitter'},'call method');
func.apply({name:'facebook'},['apply method']);