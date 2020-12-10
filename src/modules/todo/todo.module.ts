import { ISagaModule } from "redux-dynamic-modules-saga";
import { ITodoModule } from "./todo.models";
import { reducer } from "./todo.reducers";
import todoSagas from "./todo.sagas";

export function getTodoModule(): ISagaModule<ITodoModule> {
    return {
        id: "todos",
        reducerMap: {
            todos: reducer,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
        sagas: [todoSagas],
    };
}
