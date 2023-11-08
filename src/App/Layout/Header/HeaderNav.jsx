import { BaseNavComponent } from '@d-lift/core';
import HeaderNavTemplate from './HeaderNav.rt';
import HeaderLabelKeys from './HeaderLabelKeys.json';

export default class HeaderNav extends BaseNavComponent {
    onInit() {
        this.setLabelKeys(HeaderLabelKeys);
        this.setTemplate(HeaderNavTemplate);
    }

    onComponentMount() {
        this.startClock();
    }

    onComponentUnmount() {
        this.stopClock();
    }

    onNavigationChange(obj) {}

    onLocaleChange(locale) {}

    updateLangaugeInPage(locale) {
        this.updateLocale(locale);
    }
}
