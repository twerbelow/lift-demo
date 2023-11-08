import React from 'react';
import SiteConfig from 'UXSiteConfig';
import SecurityController from '@/Security/SecurityController';
import { UXApp } from '@d-lift/uxcomponents';
import { RefrenceTableAdapter, ContentManagerAdapter, DataAdapter } from '@/Adapters';
import SessionTimeoutModal from '@/Security/SessionTimeoutModal.rt';
import { Header, Footer } from './Layout';
import './Styles/App.scss';

const Branding = {
    brandLogoImage:
        global.appconfig.host + global.appconfig.contextroot + 'icons/LIFT_white_blue.png',
};

const themeOptions = {
    enableWorkflowClicks: true,
    defaultRadioStyle: 'radio',
    defaultCheckStyle: 'checkbox',
    spinner: {
        loaderType: 'CircleLoader',
        text: 'Please wait',
        size: 100,
    },
};

const App = () => {
    return (
        <UXApp
            SiteConfig={SiteConfig}
            HeaderContent={{
                brandLogo: Branding.brandLogoImage,
                content: Header,
            }}
            FooterContent={{
                brandLogo: Branding.brandLogoImage,
                content: Footer,
            }}
            ThemeOptions={themeOptions}
            DataAdapter={DataAdapter}
            RefrenceTableAdapter={RefrenceTableAdapter}
            ContentManagerAdapter={ContentManagerAdapter}
            SessionTimeoutModal={SessionTimeoutModal}
            SecurityController={SecurityController}
        />
    );
};

export default App;
