var stats = (function () {
    var people = 0;
    var $count = $('#count');

    function _render() {
        $count.html(people);
    }

    events.on('peopleChanged', function(data){
        people = data.length;
        _render();
    });
    // function setPeople(val) {
    //     people = val;
    //     _render();
    // }

})();