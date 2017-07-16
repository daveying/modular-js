var people = {
	people: [],
  init: function () {
  	this.$debugLogDiv = $("#debugLogDiv");
    this.$peopleList = $("#people-list");
  },
  outputHello: function (name) {
  	this.$debugLogDiv.html("hello " + name + "!");
  }
}

people.outputHello("david");