import Enzyme , {configure, shallow } from 'enzyme';
import Adapter from 'enyme-adapter-react-16';
configure({adapter: new Adapter()});
export {shallow, mount, render};
export default Enzyme;
