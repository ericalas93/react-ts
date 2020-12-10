export const ADD_TODO = "TODO/ADD_TODO";
export const REMOVE_TODO = "TODO/REMOVE_TODO";
export const GET_INSPIRATION_QUOTE_REQUESTED = "TODO/GET_INSPIRATION_QUOTE_REQUESTED";
export const GET_INSPIRATION_QUOTE_SUCCEEDED = "TODO/GET_INSPIRATION_QUOTE_SUCCEEDED";

interface AddTodoAction {
    type: typeof ADD_TODO;
    text: string;
}

interface RemoveTodoAction {
    type: typeof REMOVE_TODO;
    id: number;
}

interface GetInspirationQuoteRequestedAction {
    type: typeof GET_INSPIRATION_QUOTE_REQUESTED;
}

interface GetInspirationQuoteSucceeded {
    type: typeof GET_INSPIRATION_QUOTE_SUCCEEDED;
    quote: string;
}

export type TodoActionTypes = RemoveTodoAction | AddTodoAction | GetInspirationQuoteRequestedAction | GetInspirationQuoteSucceeded;
