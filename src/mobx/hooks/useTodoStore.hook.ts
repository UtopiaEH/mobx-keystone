import { useState } from 'react';
import { TTodosStore } from '../stores/types';
import {createTodoStore} from "../Providers/todoStore.provider.ts";

export const useTodoStore = (): TTodosStore => {
    const [rootStore] = useState(() => createTodoStore());

    return rootStore;
};
