import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Banner from './banner';

Enzyme.configure({ adapter: new Adapter() });
