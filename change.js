

var dogs ={
	count:1,
	dogName: '',
	bark : function(){
		return 'guk';
	},
	dogCount : function (){
		return this.count;
	},
	setName : function (name){
		this.dogName =name;
	},
	dogCount: function (){
		return this.count;
	},
	getName : function (){
		return this.dogName;
	};
	dogs.setName('doggy');
	console.log(dogs.bark());
	console.log(dogs.dogCount());
	console.log(dogs.getName());
}