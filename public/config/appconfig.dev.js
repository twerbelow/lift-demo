window.publicURL = document.getElementById('publicUrl').getAttribute('content');
// eslint-disable-next-line no-unused-vars
var appconfig = {
    host: '',
    contextroot: window.publicURL,
    environment: 'Development',
    contentManagerEndpoint: window.publicURL + 'WcmKeys/',
    serviceEndpoint: 'http://localhost:3000',
    /** Options: OFF, ALL, TRACE, DEBUG, INFO, WARN, ERROR, FATAL */
    LOG_LEVEL: {
        default: 'all',
        framework: 'all',
        services: 'all',
        state: 'all',
        application: 'all',
    }
};