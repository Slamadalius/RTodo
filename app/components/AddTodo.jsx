var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var addTodo = this.refs.todo.value;

        if(addTodo.length > 0 && typeof(addTodo) === 'string'){
            this.refs.todo.value = '';
            this.props.onAddTodo(addTodo);
        } else {
            this.refs.todo.focus();
        }
    },
    render: function() {
        return (
            <div>
                <form ref="addform" onSubmit={this.handleSubmit} className="countdown-form">
                    <input type="text" ref="todo" placeholder="What you want to do?"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
})

module.exports = AddTodo;
