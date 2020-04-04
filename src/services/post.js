import HttpClient from './HttpClient';

const resource = 'https://jsonplaceholder.typicode.com/posts';

export default {
    get() {
        return HttpClient.get(`${resource}`);
    },
    getById(Id) {
        return HttpClient.get(`${resource}/${Id}`);
    }
}