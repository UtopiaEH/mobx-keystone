import { computed } from 'mobx';
import {
    detach,
    idProp,
    Model,
    model,
    modelAction,
    tProp,
    types,
} from 'mobx-keystone';

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
    removeMe() {
        detach(this);
    }
}
