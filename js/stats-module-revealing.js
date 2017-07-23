var stats = (function () {
    var people = 0;
    var $count = $('#count');

    function _render() {
        $count.html(people);
    }

    function setPeople(val) {
        people = val;
        _render();
    }

    return {
        setPeople: setPeople
    }

})();