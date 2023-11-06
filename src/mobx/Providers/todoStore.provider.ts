import {TTodosStore} from "../stores/types";
import {TodoStore} from "../stores/TodoRoot.store.ts";
import {Todo} from "../models/Todo.model.ts";

export function createTodoStore(): TTodosStore {
    const store = new TodoStore({
        todos: [
            new Todo({
                id: '1',
                title: 'Test todo',
                done: false,
            }),
            new Todo({
                id: '2',
                title: 'Test 2 todo',
                done: true,
            }),
        ],
    });

    return store;
}

