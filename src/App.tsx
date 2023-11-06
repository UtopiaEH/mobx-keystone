import './App.css'
import {useGlobalStore} from "./mobx/hooks/useGlobalStore.hook.ts";

function App() {

    const globalStore = useGlobalStore();

    // const todoStore = useTodoStore();

    console.log('>>globalStore', globalStore.todoStore.getAllTodos);

    // console.log('>>todoStore', todoStore);

    return (
        <>
            <div>TodoLists:</div>

            {globalStore.todoStore.todos.map((todo) => {
                return (
                    <div>
                        {todo.title} <span onClick={() => todo.removeMe()}>x</span>
                    </div>
                );
            })}

            <button onClick={() => globalStore.todoStore.addTodo()}>Add todo</button>
        </>
    )
}

export default App
