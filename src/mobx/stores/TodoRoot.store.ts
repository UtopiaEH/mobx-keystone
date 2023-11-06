import { computed } from 'mobx';
import { Model, model, modelAction,  tProp, types } from 'mobx-keystone';
import {Todo} from "../models/Todo.model.ts";

@model('Store/Todo')
export class TodoStore extends Model({
    todos: tProp(types.array(types.model(Todo)), () => []),

    // selectedTodos: tProp(types.array(types.ref(Todo)))

}) {
    @computed
    get getAllTodos() {
        return this.todos;
    }

    @computed
    get getAllTodosDone() {
        return this.todos.filter((todo) => todo.done);
    }

    @modelAction
    addTodo() {
        this.todos.push(
            new Todo({
                title: 'test',
            })
        );
    }
}
