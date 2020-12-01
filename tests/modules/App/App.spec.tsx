import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "ui-module/App/App";

describe("App.spec.tsx", () => {
    let AppComponent: ShallowWrapper<undefined, undefined>;
    beforeEach(() => {
        AppComponent = shallow(<App />);
    });

    it("should render without error", () => {
        expect(AppComponent.length).toBe(1);
        expect(1).toBe(1);
    });
});
