import {computed} from 'mobx';
import {
    detach, findParent,
    idProp,
    Model,
    model,
    modelAction,
    tProp,
    types,
} from 'mobx-keystone';
import {TodoStore} from "../stores/TodoRoot.store.ts";


@model('TodoModel')
export class Todo extends Model({
    id: idProp,
    title: tProp(types.string),
    done: tProp(types.boolean, false),
}) {
    @modelAction
    setDone(done: boolean) {
        this.done = done;
    }

    @computed
    get getStatusDone() {

        return this.done;
    }

    @modelAction
    removeTodo() {
        detach(this);
    }

    @modelAction
    changeStatusDone() {
        this.done = !this.done;

        const todoStore = findParent<TodoStore>(this, (parentNode) => parentNode instanceof TodoStore);
        if (!todoStore) throw new Error("unknown todoStore")
        if(this.done) {
            todoStore.addSelectedTodos(this);
        } else {
            todoStore.removeSelectedTodos(this);

        }
    }

}
