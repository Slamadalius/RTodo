var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });
        describe('filterTodos', ()=>{
            var todos = [{
                id: 23,
                text: 'test all files',
                completed: true
            }, {
                id: 23,
                text: 'test all files and more',
                completed: false
            }, {
                id: 23,
                text: 'karma points',
                completed: true
            }];

            it('should return all items if showCompleted is true', ()=>{
                var filterTodos = TodoAPI.filterTodos(todos, true, '');
                expect(filterTodos.length).toBe(3);
            });
            it('should return only non-completed if showCompleted is false', ()=>{
                var filterTodos = TodoAPI.filterTodos(todos, false, '');
                expect(filterTodos.length).toBe(1);
            });
            it('should sort by completed status', ()=>{
                var filterTodos = TodoAPI.filterTodos(todos, true, '');
                expect(filterTodos[0].completed).toBe(false);
            });
            it('should filter todos by searchText', ()=>{
                var filterTodos = TodoAPI.filterTodos(todos, true, 'test');
                expect(filterTodos.length).toBe(2);
            });
            it('should filter todos by searchText if Uppercase', ()=>{
                var filterTodos = TodoAPI.filterTodos(todos, true, 'Test');
                expect(filterTodos.length).toBe(2);
            });
            it('should return all todos if searchText is empty', ()=>{
                var filterTodos = TodoAPI.filterTodos(todos, true, '');
                expect(filterTodos.length).toBe(3);
            });

        });
    });
