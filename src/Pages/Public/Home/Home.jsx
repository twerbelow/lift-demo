import Template from './Home.rt';
import { PageConfig, UXPage } from '@d-lift/core';

@PageConfig({
    Path: '/',
    Description: 'Home Page',
    Template: Template,
    ContentManager: true,
})
class Home extends UXPage {
    initializeModel() {
        return {
            home: 'Home Page',
        };
    }
}

export default Home;
