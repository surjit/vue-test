import axios from 'axios';

const httpClient = axios.create({
    baseURL: '/',
    timeout: 3000, // indicates, 1000ms ie. 1 second
    headers: {
        "Content-Type": "application/json",
        // anything you want to add to the headers
    }
});

export default httpClient
