var expect = require('expect');
var React = require('react');
var {Provider} = require('react-redux');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

import {configure} from 'configureStore';
// var TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from 'TodoList';
// var Todo = require('Todo');
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', ()=>{
  it('should exist', ()=>{
    expect(TodoList).toExist();
  });

  it('should render one Todo components for each todo item', ()=>{
    var todos = [{
      id:1,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
      id:2,
      text: 'More stuff',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];
    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    )
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', ()=>{
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  })
});
