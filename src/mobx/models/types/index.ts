import {Todo} from "../Todo.model.ts";
import {SnapshotInOfModel, SnapshotOutOfModel} from "mobx-keystone";

export type TodoModel = InstanceType<typeof Todo>

export type TodoModelSnapshotOut = SnapshotOutOfModel<Todo>
export type TodoModelSnapshotIn = SnapshotInOfModel<Todo>