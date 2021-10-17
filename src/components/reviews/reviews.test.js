import Enzyme, { mount } from 'enzyme';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should render correct reviews count', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length);
  });

  it('should render all the fields inside', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review-user"]').length).toBe(reviews.length);
    expect(wrapper.find('[data-id="review-text"]').length).toBe(reviews.length);
    expect(wrapper.find('[data-id="review-rate"]').length).toBe(reviews.length);
  });

  it('should render different field values', () => {
    function uniqueValuesCounter(arr) {
      const result = {};
      arr.forEach((value) => {
        if (result[value] === undefined) {
          result[value] = 0;
        }
        result[value] += 1;
      });
      return Object.keys(result).length;
    }

    function isNotContainsSameValues(arr) {
      return uniqueValuesCounter(arr) === arr.length;
    }

    const wrapper = mount(<Reviews reviews={reviews} />);
    const userValues = wrapper
      .find('[data-id="review-user"]')
      .map((node) => node.text());
    const textValues = wrapper
      .find('[data-id="review-text"]')
      .map((node) => node.text());
    const rateValues = wrapper
      .find('[data-id="review-rate"]')
      .map((node) => node.getDOMNode().getAttribute('data-value'));

    expect(isNotContainsSameValues(userValues)).toBe(true);
    expect(isNotContainsSameValues(textValues)).toBe(true);
    expect(isNotContainsSameValues(rateValues)).toBe(true);
  });
});
