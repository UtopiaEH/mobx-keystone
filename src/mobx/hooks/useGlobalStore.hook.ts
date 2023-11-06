import { useState } from 'react';
import { TGlobalStore } from '../stores/types';
import {createRootStore} from "../Providers/globalStore.provider.ts";

export const useGlobalStore = (): TGlobalStore => {
    const [rootStore] = useState(() => createRootStore());

    return rootStore;
};
