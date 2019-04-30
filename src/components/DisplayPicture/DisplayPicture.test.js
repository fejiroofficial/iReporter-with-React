import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import DisplayPicture from './DisplayPicture';

createMockStore();

describe('<DisplayPicture>', () => {
  it('should render without crashing', () => {
    const container = (
      <DisplayPicture>
        <p>Hello</p>
      </DisplayPicture>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});