import {  Model, model,  tProp, types } from 'mobx-keystone';
import {TodoStore} from "./TodoRoot.store.ts";

@model('globalStore')
export class GlobalStore extends Model({
    todoStore: tProp(types.model(TodoStore)),
}) {}
