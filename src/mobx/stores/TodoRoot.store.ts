import {computed} from 'mobx';
import {detach, Model, model, modelAction, prop, Ref, rootRef, tProp, types} from 'mobx-keystone';
import {Todo} from "../models/Todo.model.ts";
import {TodoModelSnapshotIn} from "../models/types";


// we could use a root reference that makes use of `getRefId()` on models...
const todoRef = rootRef<Todo>("todoStore/TodoRef", {
    // this works, but we will use `getRefId()` from the `Todo` class instead
    // getId(maybeTodo) {
    //   return maybeTodo instanceof Todo ? maybeTodo.id : undefined
    // },

    onResolvedValueChange(ref, newTodo, oldTodo) {
        if (oldTodo && !newTodo) {
            // if the todo value we were referencing disappeared then remove the reference
            // from its parent
            detach(ref)
        }
    },
})

@model('Store/Todo')
export class TodoStore extends Model({
    todos: tProp(types.array(types.model(Todo)), () => []),
    selectedTodos: prop<Ref<Todo>[]>(() => [])

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
    addTodo(todo: TodoModelSnapshotIn) {
        this.todos.push(new Todo(todo));
    }

    @modelAction
    addSelectedTodos(todo: Todo) {
        if (todo && !this.todos.includes(todo)) throw new Error("unknown todo")

        this.selectedTodos.push(todoRef(todo));
    }
}
