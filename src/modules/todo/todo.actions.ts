import * as TodoActions from "./todo.actionTypes";

export function addTodo(text: string): TodoActions.TodoActionTypes {
    return {
        type: TodoActions.ADD_TODO,
        text,
    };
}

export function removeTodo(id: number): TodoActions.TodoActionTypes {
    return {
        type: TodoActions.REMOVE_TODO,
        id,
    };
}

export function getInspirationalQuote(): TodoActions.TodoActionTypes {
    return {
        type: TodoActions.GET_INSPIRATION_QUOTE_REQUESTED,
    };
}
