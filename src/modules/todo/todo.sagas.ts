import { takeLatest, call, all, AllEffect, ForkEffect, put } from "redux-saga/effects";
import { Await } from "types";

import * as Actions from "./todo.actionTypes";

interface IQuote {
    text: string;
    author: string;
}

interface IFail {
    status: string;
}

type IQuotes = IQuote[];

export async function getQuotes(): Promise<IQuotes> {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    return data;
}

function* getInspirationalQuote() {
    try {
        const quotes: Await<ReturnType<typeof getQuotes>> = yield call(getQuotes);
        const firstQuote = quotes[0].text;
        yield put({ type: Actions.GET_INSPIRATION_QUOTE_SUCCEEDED, quote: firstQuote });
    } catch (e) {
        const err = (e as IFail).status;
        console.log(err);
    }
}

export default function* todoSagas(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
    yield all([takeLatest(Actions.GET_INSPIRATION_QUOTE_REQUESTED, getInspirationalQuote)]);
}
