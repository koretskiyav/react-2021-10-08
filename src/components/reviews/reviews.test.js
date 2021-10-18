import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import Review from './review';
import Rate from '../rate';
import { restaurants } from '../../fixtures';

const reviews = restaurants[2].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(reviews.length);
    expect(wrapper.find('[data-id="review-stars"]').length).toBe(1);
    expect(wrapper.find('[data-id="review-text"]').length).toBe(1);
  });
});
