import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('Should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(2);
  });

  it('Should have certain names', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    wrapper.find('[data-id="review-name"]').forEach((node, index) => {
      expect(node.text()).toBe(reviews[index]['user']);
    });
  });

  it('Should have certain text', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    wrapper.find('[data-id="review-text"]').forEach((node, index) => {
      expect(node.text()).toBe(reviews[index]['text']);
    });
  });
});
