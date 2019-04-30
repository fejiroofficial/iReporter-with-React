import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { createMockStore } from '../../Mocks/testSetup';
import Layout from '../Layout';

createMockStore();

describe('<Layout>', () => {
  it('should render without crashing', () => {
    const container = (
      <Layout>
        <p>Hello</p>
      </Layout>
    );
    const wrapper = shallow(container);
    expect(wrapper).toMatchSnapshot();
  });
});
