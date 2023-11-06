import {computed} from 'mobx';
import {
    detach, findParent, getParent, getParentPath, getParentToChildPath, getRootStore,
    idProp,
    Model,
    model,
    modelAction,
    tProp,
    types,
} from 'mobx-keystone';
import {TodoStore} from "../stores/TodoRoot.store.ts";

// function getParentAtDepth<T extends Model>(
//     model: T,
//     depth: number
// ): T | null {
//     let parent: Model | null = model;
//     for (let i = 0; i < depth; i++) {
//         parent = getParent(parent);
//         if (!parent) {
//             // If there's no parent at the desired depth, return null
//             return null;
//         }
//     }
//     return parent as T;
// }


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
        todoStore.addSelectedTodos(this);
    }

}
