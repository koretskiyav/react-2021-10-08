import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import Review from './review';
import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;
const review = reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('reviews should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('each review should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length);
  });

  it('review should contain user', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(
      wrapper.containsMatchingElement(<h4 data-id="user">{review.user}</h4>)
    ).toEqual(true);
  });

  it('review should contain text', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(
      wrapper.containsMatchingElement(<p data-id="text">{review.text}</p>)
    ).toEqual(true);
  });

  it('review should contain rate', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="rate"]').length).toBe(reviews.length);
  });
});
