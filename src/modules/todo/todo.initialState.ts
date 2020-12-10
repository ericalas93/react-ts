import { ITodo, ITodoState } from "./todo.models";

const todos: ITodo[] = [];
for (let i = 0; i < 20; i++) {
    todos.push({ id: i, text: "hello world", completed: false });
}
export const initialState: ITodoState = {
    todos: todos,
    filterValue: null,
    inspirationalQuote: "",
};
