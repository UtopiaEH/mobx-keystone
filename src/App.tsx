import './App.css'
import {useGlobalStore} from "./mobx/hooks/useGlobalStore.hook.ts";
import {observer} from "mobx-react";

function App() {

    const globalStore = useGlobalStore();
    const {todoStore} = globalStore;
    return (
        <>
            <div>TodoLists:</div>

            {todoStore.todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <input type={'checkbox'} checked={todo.done} onChange={() => todo.changeStatusDone()}/>
                        <span onClick={() => todo.changeStatusDone()}>
                            {todo.title} {'  '}
                     </span>

                        <span onClick={() => todo.removeTodo()}>x</span>
                    </div>
                );
            })}

            <button onClick={() => todoStore.addTodo({
                id: Date.now().toString(),
                title: 'new todo',
                done: false
            })}>Add todo
            </button>


            <div>Selected as Ref:</div>


            {todoStore.selectedTodosRef.length ? todoStore.selectedTodosRef.map((todo) => {
                return (
                    <div key={todo.id}>
                        {todo.title}
                    </div>
                );
            }) : <span>No selected todos</span>}
        </>
    )
}

export default observer(App)
