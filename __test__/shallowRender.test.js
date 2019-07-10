
// test file
import { shallow, mount, render } from 'enzyme';
import React from "react";
import App from "../src/components/App"

test("shallow wrapper instance should not be null", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance).to.be.instanceOf(App);
})