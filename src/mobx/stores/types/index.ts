import {GlobalStore} from "../GlobalRoot.store.ts";
import {TodoStore} from "../TodoRoot.store.ts";


export type TGlobalStore = InstanceType<typeof GlobalStore>

export type TTodosStore = InstanceType<typeof TodoStore>