import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;
const emptyArray = [];

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
  it('render zero reviews', () => {
    const wrapper = mount(<Reviews reviews={emptyArray} />);
    expect(wrapper.exists('[data-id="review"]')).toEqual(false);
  });
  it('render n reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length);
  });
  it('childrens amount equal reviews amount', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').children().length).toBe(
      reviews.length
    );
  });
  it('component name is "Reviews"', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.name()).toEqual('Reviews');
  });
});
