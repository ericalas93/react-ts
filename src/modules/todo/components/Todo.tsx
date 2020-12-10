import React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { ITodoModule, ITodo } from "../todo.models";
import { getTodoModule } from "../todo.module";
import * as TodoActionsTypes from "../todo.actionTypes";
import * as TodoActions from "../todo.actions";

import TodoItem from "./TodoItem/TodoItem";

interface ITodoStateToProps {
    todos: ITodo[];
    quote: string;
}

interface ITodoDispatchProps {
    getInspirationalQuote: () => void;
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Todo = (props: Props) => {
    return (
        <div>
            <span>Pending Todos: </span>
            <button
                onClick={() => {
                    props.getInspirationalQuote();
                }}
            >
                Need some inspiration?
            </button>
            {props.quote && <span>Here is some help: {props.quote}</span>}
            <div>
                {props.todos.map((todo: ITodo) => {
                    return <TodoItem key={todo.id} {...todo} />;
                })}
            </div>
        </div>
    );
};

const mapStateToProps = (state: ITodoModule): ITodoStateToProps => {
    return {
        todos: state.todos.todos,
        quote: state.todos.inspirationalQuote,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<TodoActionsTypes.TodoActionTypes>): ITodoDispatchProps => {
    return bindActionCreators(
        {
            getInspirationalQuote: TodoActions.getInspirationalQuote,
        },
        dispatch
    );
};

const ConnectedTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

const DynamicTodo: React.FC<{}> = () => (
    <DynamicModuleLoader modules={[getTodoModule()]}>
        <ConnectedTodo />
    </DynamicModuleLoader>
);

export default DynamicTodo;
