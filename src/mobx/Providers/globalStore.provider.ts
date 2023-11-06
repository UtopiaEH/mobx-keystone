import {
    connectReduxDevTools,
    ModelAutoTypeCheckingMode,
    registerRootStore,
    setGlobalConfig,
} from 'mobx-keystone';
import {TGlobalStore} from "../stores/types";
import {GlobalStore} from "../stores/GlobalRoot.store.ts";
import {createTodoStore} from "./todoStore.provider.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import remotedev from 'remotedev';


//GlobalSettings
setGlobalConfig({
    modelAutoTypeChecking: ModelAutoTypeCheckingMode.AlwaysOn,
});


export function createRootStore(): TGlobalStore {
    const rootStore = new GlobalStore({
        todoStore: createTodoStore(),
    });

    registerRootStore(rootStore);

    const connection = remotedev.connectViaExtension({
        name: "Todo List Example",
    })

    connectReduxDevTools(remotedev, connection, rootStore)
    return rootStore;
}
