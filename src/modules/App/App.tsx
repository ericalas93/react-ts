import React from "react";
import AsyncTodo from "ui-module/todo/components/AsyncTodo";
import { EViews } from "./app.models";

interface IAppProps {
    viewSelected?: EViews;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <div>
            {props.viewSelected === EViews.empty && <span>Welcome, User!</span>}
            {props.viewSelected === EViews.todos && <AsyncTodo />}
        </div>
    );
};

App.defaultProps = {
    viewSelected: EViews.todos,
};

export default App;
