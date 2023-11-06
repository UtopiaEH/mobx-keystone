import {TTodosStore} from "../stores/types";
import {TodoStore} from "../stores/TodoRoot.store.ts";

export function createTodoStore(): TTodosStore {
    const store = new TodoStore({});
    store.addTodo({
        id: '1',
        title: 'Test todo',
        done: false,
    })

    store.addTodo({
        id: '2',
        title: 'Test 2 todo',
        done: true,
    })


    store.todos.forEach((todo) => {
        if(todo.done) {
            store.addSelectedTodos(todo);
        }
    })
    // registerRootStore(TodoStore)

    return store;
}

