import { ServiceConfig, GET, POST, REQUEST } from '@d-lift/core';
import SampleData from './sample-data.json';

@ServiceConfig({
    baseHrefKey: 'serviceEndpoint',
    secure: true,
    timeout: 3000,
})
class UserService {
    constructor() {
        //Interceptor example
        this.interceptors.request.use((config) => {
            console.log('Request Config', config);
            return config;
        });
    }

    @GET({
        path: '/getAllUsers/',
        timeout: 200, //Timeout override
    })
    async getAllUsers(requestBody, { success, data, status, headers }) {
        //Perform data transformation here.
        data = SampleData;
        return data;
    }

    @POST({
        path: '/createUser',
        data: 'userDetails',
        secure: false, //Secure flag overrride
    })
    async createAccount(requestBody, { success, data, status, headers }) {
        //Perform data transformation here.
        return data;
    }
}
const userService = new UserService();
export default userService;
