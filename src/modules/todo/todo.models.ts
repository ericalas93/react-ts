export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
}

export interface ITodoState {
    todos: ITodo[];
    filterValue: string | null;
    inspirationalQuote: string;
}

export interface ITodoModule {
    todos: ITodoState;
}
