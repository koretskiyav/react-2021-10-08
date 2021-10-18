import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rate from './rate';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });
describe('Rate', () => {
  it('should render a component', () => {
    const wrapper = mount(<Rate value={3} />);

    expect(wrapper.find('svg[className="star checked"]').length).toBe(3);
  });
});
