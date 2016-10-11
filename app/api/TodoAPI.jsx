var $ = require('jquery');

module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    var filterTodos = todos;
    var rankings = {
      true: 0,
      false: 1
    };

    //filter by showCompleted
    filterTodos = filterTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //Sort todos with non-completed first
    filterTodos.sort((a, b) => {
      return rankings[b.completed] - rankings[a.completed]
    });

    //filter by searchText
    filterTodos = filterTodos.filter((todo) =>{
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    return filterTodos;
  }
};
