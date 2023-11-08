import { Navigate } from '@d-lift/core';

export default class SecurityController {
    /**
     * This method is called via Security Context for Logout Functionality
     * @returns {Promise}
     */
    logout = async () => {
        /** Application can call any Logout URL to perform logout on application server
         * and event use Navigate.redirect to load different URL like Application Home Page
         */
        Navigate.to('/');
    };

    /**
     * This method is called via Security Context for Login Functionality
     *
     * @param {String} username
     * @param {String} password
     * @returns {Promise}
     */
    login = async (username, password) => {
        let response = {
            roles: ['admin'],
            userprofile: {
                userid: '1234',
                gender: 'M',
                fullname: 'John Doe',
                XAuthToken: 'ABCDEF123456789',
            },
            success: false,
        };
        return response;
    };
}
