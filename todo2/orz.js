(function(obj){
	var Orz = Orz || {};
	var Model = Orz.Model = Orz.Model ||function(){};
	Model.fn = Model.prototype = {
		save:function(){}
	};
	var View = Orz.View = function(){};

	View.extend = Model.extend = function(option){
		var klass = function(){
			if(typeof this.initialize === 'function'){
				this.initialize.apply(this,arguments);
			};
		};
		
		var F = function(){};
		F.prototype = this.prototype;
		klass.prototype = new F();
		klass.prototype.__super = this.prototype;
		klass.prototype.constructor = klass;

		for(pro in option){
			klass.prototype[pro] = option[pro];
		}
		return klass;
	}
	obj.Orz = Orz;
})(window);