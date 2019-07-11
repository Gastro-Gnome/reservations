
// test file
import { shallow, mount, render } from 'enzyme';
import React from "react";
import App from "../src/components/App";
import Hours from "../src/components/Hours";
import toJSON from "enzyme-to-json";
import { shouldInstrument } from 'jest-runtime';
import { isTSAnyKeyword } from '@babel/types';

describe('App', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<App />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

describe('Hours', () => {
  it('contains as many table rows as there are days of the week', () => {
    const wrapper = shallow(<Hours />);
    expect(wrapper.find(<tr></tr>)).to.be.lengthOf(7);
  });
});