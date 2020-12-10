import * as TodoActions from "./todo.actionTypes";
import { initialState } from "./todo.initialState";
import { ITodoState } from "./todo.models";

export function reducer(state: ITodoState = initialState, action: TodoActions.TodoActionTypes): ITodoState {
    switch (action.type) {
        case TodoActions.ADD_TODO: {
            return {
                ...state,
                todos: state.todos.concat({ id: 10, text: action.text, completed: false }),
            };
        }
        case TodoActions.GET_INSPIRATION_QUOTE_SUCCEEDED: {
            return {
                ...state,
                inspirationalQuote: action.quote,
            };
        }
        default: {
            return state;
        }
    }
}
