var assert = require('assert');
//var Person = require('./person').Person;
require('./person');

describe("tdd show",function(){
	it('Person should have sayHello method',function(){
		var jobs = new Person('jobs');
		assert(typeof jobs.sayHello === 'function');
		assert.equal('hi,jobs',jobs.sayHello());
	});
});