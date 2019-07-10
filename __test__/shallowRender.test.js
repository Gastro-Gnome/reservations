
// test file
import { shallow, mount, render } from 'enzyme';
import React from "react";
import App from "../src/components/App";
import toJSON from "enzyme-to-json";
import { shouldInstrument } from 'jest-runtime';
import { isTSAnyKeyword } from '@babel/types';

describe('App', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<App />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });