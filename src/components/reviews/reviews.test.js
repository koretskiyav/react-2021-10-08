import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { restaurants } from '../../fixtures';
import Reviews from './reviews';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Reviews reviews={reviews} />);
  });

  it('should render', () => {
    expect(wrapper.find('[data-id="review"]').length).toBe(2);
  });

  it('should render user name', () => {
    expect(wrapper.find('[data-id="review-name"]').first().text()).toBe('Antony');
  });

  it('should render user comment', () => {
    expect(wrapper.find('[data-id="review-text"]').first().text()).toBe('Not bad');
  });

  it('should render rating', () => {
    const review = wrapper.find('[data-id="review"]').last()
    expect(review.find('svg[data-id="star"]').length).toBe(5);
    expect(review.find('svg[data-id="star"].checked').length).toBe(3);
  });
});
