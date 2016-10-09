var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions')

export var AddTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;

        if(todoText.length > 0 && typeof(todoText) === 'string'){
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form ref="addform" onSubmit={this.handleSubmit} className="countdown-form">
                    <input type="text" ref="todoText" placeholder="What you want to do?"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
})

export default connect()(AddTodo);
