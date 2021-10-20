import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../fixtures';

//example full test for reviews component, author a.koretskiy

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[1];
const render = (data) => mount(<Review {...data} />);

describe('Review', () => {
  let reviewsCount, name, text, rate;

  beforeEach(() => {
    const wrapper = render(review);
    reviewsCount = wrapper.find('Review').length;
    name = wrapper.find('[data-id="review-user"]').text();
    text = wrapper.find('[data-id="review-text"]').text();
    rate = wrapper.find('svg[data-id="full-star"]').length;
  });

  it('should render review', () => {
    expect(reviewsCount).toBe(1);
  });

  it('should render user name', () => {
    expect(name).toBe(review.user);
  });

  it('should render text', () => {
    expect(text).toBe(review.text);
  });

  it(`should render ${review.rating} fulled stars`, () => {
    expect(rate).toBe(review.rating);
  });
});

describe('Anonymous Review', () => {
  it('should render anonymous name', () => {
    const wrapper = render({ rating: 1 });
    expect(wrapper.find('[data-id="review-user"]').text()).toBe('Anonymous');
  });
});
