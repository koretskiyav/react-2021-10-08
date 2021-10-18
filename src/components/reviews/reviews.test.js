import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render all reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews-list"]').length).toBe(
      reviews.length
    );
  });

  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews-app"]').length).toBe(1);
  });
});
