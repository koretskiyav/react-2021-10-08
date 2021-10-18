import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { restaurants } from '../../fixtures';
import Reviews from './reviews';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('amount of rendered reviews should be equal with review`s length', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('Review').length).toBe(reviews.length);
  });

  it('should render user of all reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review-user"]').length).toBe(reviews.length);
  });

  it('should render text of all reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review-text"]').length).toBe(reviews.length);
  });

  it('should render rating of all reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review-rating"]').length).toBe(
      reviews.length
    );
  });
});
