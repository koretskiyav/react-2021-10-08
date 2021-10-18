import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rate from './rate';

const rating = 3;
const MAX_POSSIBLE_RATING = 5;

Enzyme.configure({ adapter: new Adapter() });

describe('Rate', () => {
  it('should render', () => {
    const wrapper = mount(<Rate value={rating} />);
    expect(wrapper.find('[data-id="rating"]').length).toBe(1);
  });

  it('should render proper rating', () => {
    const wrapper = mount(<Rate value={rating} />);
    expect(wrapper.find('svg').length).toBe(MAX_POSSIBLE_RATING);
    expect(wrapper.find('svg[data-id="checked"]').length).toBe(rating);
  });
});
