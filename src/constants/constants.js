import axios from 'axios';

export default axios.create({
    baseURL: "https://www.coingecko.com/api/v3",
});