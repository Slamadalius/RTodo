var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk The Dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Drink a shake'
        }, {
          id: 5,
          text: 'code the web'
        }
      ]
    };
  },
  handleAddTodo: function (AddTodo) {
    alert('new Todo: ' + AddTodo);
  },
  render: function () {
    var {todos, } = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
