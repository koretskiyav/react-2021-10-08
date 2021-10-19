import Enzyme, { mount } from 'enzyme';

import { restaurants } from '../../fixtures';
import Review from './review/review';

const product = restaurants[0].menu[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review reviews={reviews} />);
    expect(wrapper.find('[data-id="product"]').length).toBe(1);
  });
});
