import React from "react";
import loadable from "@loadable/component";

const AsyncTodo = loadable(() => import("./Todo"), {
    fallback: <div>hello</div>,
});

export default AsyncTodo;
