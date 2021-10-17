import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render review div', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should render user name', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe(review.user);
  });

  it('should render review text', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe(review.text);
  });

  it('should render rating', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="rate"]').children().length).toBe(5);
  });
});
