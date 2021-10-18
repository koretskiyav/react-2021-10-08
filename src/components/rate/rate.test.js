import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rate from './rate';
import { restaurants } from '../../fixtures';
import cn from 'classnames';

import styles from './rate.module.css';

const { rating } = restaurants[0].reviews[1];

Enzyme.configure({ adapter: new Adapter() });

const wrapper = mount(<Rate value={rating} />);

describe('Rate', () => {
  it('should render rate', () => {
    expect(wrapper.find('[data-id="rate"]').length).toBe(1);
  });

  it('should render stars total', () => {
    expect(wrapper.find('svg[data-id="rate-star"]').length).toBe(5);
  });

  it('should render stars rating', () => {
    expect(wrapper.find(`svg.${cn([styles.checked])}[data-id="rate-star"]`).length).toBe(rating);
  });
});
