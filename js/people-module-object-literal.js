var people = {
    people: [],
    init: function () {
        this.$peopleList = $("#people-list");
        this.$addButton = $("#add-button");
        this.$textInput = $("#text-input");
        this.bindEvents();
        people.render();
    },
    bindEvents: function () {
        this.$addButton.on('click', this.addPerson.bind(this));
        this.$peopleList.delegate('span.del', 'click', this.deletePerson.bind(this));
        this.$peopleList.delegate('span.del', 'mouseover', this.changeColor.bind(this));
        this.$peopleList.delegate('span.del', 'mouseout', this.changeColor.bind(this));
    },
    render: function () {
        var lenPeople = this.people.length;
        var htmlStr = "";
        for (let i = 0; i < lenPeople; i++) {
            htmlStr += `<li><span class="name">${this.people[i]}</span><span class="del">&times;</span></li>`
        }
        this.$peopleList.html(htmlStr);
    },
    addPerson: function () {
        if (this.$textInput.val() === '') return;
        this.people.push(this.$textInput.val());
        this.render();
        this.$textInput.val("");
    },
    deletePerson: function (event) {
        var $remove = $(event.target).closest('li');
        var i = this.$peopleList.find('li').index($remove);
        this.people.splice(i, 1);
        this.render();
    },
    changeColor: function (event) {
        var $overred = $(event.target).closest('li');
        if (event.type === "mouseover")
            $overred.css("border-color", "red");
        else
            $overred.css("border-color", "grey");
    }
}
people.init();