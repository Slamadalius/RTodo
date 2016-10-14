import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends Component {
    handleSubmit (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;

        if(todoText.length > 0 && typeof(todoText) === 'string'){
            this.refs.todoText.value = '';
            dispatch(actions.StartAddTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    }
    render () {
        return (
            <div className="container__footer">
                <form ref="addform" onSubmit={this.handleSubmit.bind(this)} className="countdown-form">
                    <input type="text" ref="todoText" placeholder="What you want to do?"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
};

export default connect()(AddTodo);
