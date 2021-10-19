import Enzyme, { mount } from 'enzyme';

import { restaurants } from '../../fixtures';
import Review from './review/review';

const product = restaurants[0].menu[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Product', () => {
  it('should render', () => {
    const wrapper = mount(<Review product={product} />);
    expect(wrapper.find('[data-id="product"]').length).toBe(1);
  });
});
