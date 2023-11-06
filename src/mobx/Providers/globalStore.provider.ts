import {
    ModelAutoTypeCheckingMode,
    registerRootStore,
    setGlobalConfig,
} from 'mobx-keystone';
import {TGlobalStore} from "../stores/types";
import {GlobalStore} from "../stores/GlobalRoot.store.ts";
import {createTodoStore} from "./todoStore.provider.ts";

//GlobalSettings
setGlobalConfig({
    modelAutoTypeChecking: ModelAutoTypeCheckingMode.AlwaysOn,
});


export function createRootStore(): TGlobalStore {
    const rootStore = new GlobalStore({
        todoStore: createTodoStore(),
    });

    registerRootStore(rootStore);

    return rootStore;
}
