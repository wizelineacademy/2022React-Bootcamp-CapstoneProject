import { shallow } from "enzyme";
import Header from "./Header";

describe('Header validations', () => {
    test('should says EcoForniture', () => {
        const wrapper = shallow( <Header /> );
        const textLogo = wrapper.find('span').text();
        expect( textLogo ).toBe( 'EcoForniture' );
    })
})