import Enzyme, { mount } from 'enzyme';
import counter from './counter';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

function getComponent() {
  const testProps = {};
  const dumb = (props) => {
    Object.assign(testProps, props);
    return <div></div>;
  };
  return {
    component: React.createElement(counter(dumb)),
    props: testProps,
  };
}

describe('Counter', () => {
  it('should render with initial amount', () => {
    const fakeComponent = getComponent();
    mount(fakeComponent.component);

    expect(fakeComponent.props.amount).toBe(0);
  });

  it('should be non-negative', () => {
    const fakeComponent = getComponent();

    act(() => {
      mount(fakeComponent.component);
      fakeComponent.props.decrement();
    });

    expect(fakeComponent.props.amount).toBe(0);
  });

  it('should increment correctly', () => {
    const fakeComponent = getComponent();

    act(() => {
      mount(fakeComponent.component);
      fakeComponent.props.increment();
    });

    expect(fakeComponent.props.amount).toBe(1);
  });

  it('should decrement correctly', () => {
    const fakeComponent = getComponent();

    act(() => {
      mount(fakeComponent.component);

      fakeComponent.props.increment();
    });

    act(() => {
      fakeComponent.props.increment();
    });

    act(() => {
      fakeComponent.props.decrement();
    });

    expect(fakeComponent.props.amount).toBe(1);
  });
});
