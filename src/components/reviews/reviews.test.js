import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });
let wrapper;
describe('Review', () => {
  beforeEach(() => {
    wrapper = mount(<Reviews reviews={reviews} />);
  });

  it('should render a component', () => {
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should check the amount of rendered reviews', () => {
    expect(wrapper.find('Review').length).toBe(reviews.length);
  });

  it('quality of props', () => {
    expect(wrapper.find('Review').length).toBe(reviews.length);
    expect(wrapper.find('Review').at(0).props().user).toEqual(reviews[0].user);
  });
});
