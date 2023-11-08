import { mount } from 'enzyme';
import { AppContext } from '@d-lift/core';

let mockLocationProp = {
    location: {
        pathname: '/',
        state: {},
    },
};

describe('Home Page Test', () => {
    test('Renders Page Mount and Unmount Without Crashing', () => {
        const HomePage = mount(jest.Lift.getPage('Public', 'Home', mockLocationProp));
        // expect(HomePage).toMatchSnapshot();
        HomePage.unmount();
    });

    test('Home Page Model Initialization', () => {
        const HomePage = mount(jest.Lift.getPage('Public', 'Home'));
        expect(typeof HomePage.instance().initializeModel).toBe('function');
        expect(HomePage.state().model.home).toEqual('Home Page');
        HomePage.unmount();
    });
    test('Home Page Model Initialization using enzyme', () => {
        const HomePage = mount(jest.Lift.getPage('Public', 'Home'));
        expect(AppContext.model.getValue('home')).toEqual('Home Page');
        expect(HomePage.state().model.home).toEqual('Home Page');
        HomePage.unmount();
    });
});
