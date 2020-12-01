import Enzyme from "enzyme";
// TODO: eventually switch to official enzyme adapater which is not ready. Tracked here: https://github.com/enzymejs/enzyme/issues/2429
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
