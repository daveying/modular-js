var people = (function(){
    var people = ['David', 'Echo'];

    // cache DOM
    var $peopleList = $("#people-list");
    var $addButton = $("#add-button");
    var $textInput = $("#text-input");
    render();

    // bind events
    $addButton.on('click', addPerson);
    $peopleList.delegate('span.del', 'click', deletePerson);
    $peopleList.delegate('span.del', 'mouseover', changeColor);
    $peopleList.delegate('span.del', 'mouseout', changeColor);

    function render() {
        var lenPeople = people.length;
        var htmlStr = "";
        for (let i = 0; i < lenPeople; i++) {
            htmlStr += `<li><span class="name">${people[i]}</span><span class="del">&times;</span></li>`
        }
        $peopleList.html(htmlStr);
    };

    var addPerson = function (val) {
        var name = (typeof val === "string") ? val : $textInput.val();
        people.push(name);
        render();
    };

    function deletePerson (val) {
        var i;
        if (typeof val === "number") {
            i = val;
        } else {
            var $remove = $(val.target).closest('li');
            i = $peopleList.find('li').index($remove);
        }
        people.splice(i, 1);
        render();
    };

    function changeColor (event) {
        var $overred = $(event.target).closest('li');
        if (event.type === "mouseover")
            $overred.css("border-color", "red");
        else
            $overred.css("border-color", "grey");
    };
    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    }
})();