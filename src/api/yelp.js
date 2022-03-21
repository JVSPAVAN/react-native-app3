import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer AFHMMo0ujiQYw1C5Y81Ss1rDzFh_TnJwozAkGznp4ArjqdP0FOdvy2DvdZt9KNSnLLU8k_5cmUMWRSFz6bR0vN9Y6Xi6wHXZ_WKemdsuhZjZXUmN8Bag09a2pbU3YnYx'
    }
});
