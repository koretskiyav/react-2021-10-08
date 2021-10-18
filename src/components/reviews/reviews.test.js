import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

const wrapper = mount(<Reviews reviews={reviews} />);

describe('Reviews', () => {
  it('should render reviews', () => {
    expect(wrapper.find('[data-id="review-content"]').length).toBe(reviews.length);
  });

  it('should render reviews users', () => {
    const userEls = wrapper.find('[data-id="review-content-user"]');
    reviews.every((item, index) => expect(userEls.at(index).text()).toBe(item.user));
  });

  it('should render reviews texts', () => {
    const textEls = wrapper.find('[data-id="review-content-text"]');
    reviews.every((item, index) => expect(textEls.at(index).text()).toBe(item.text));
  });

  it('should render reviews rates (without checking Rate logic)', () => {
    expect(wrapper.find('[data-id="review-content-rate"]').length).toBe(reviews.length);
  });
});
