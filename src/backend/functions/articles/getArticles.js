//async function that retrieves all blog data from database

import axios from 'axios';

const getAllArticles = async () => {

    //will return either a list of JSON object (articles)
    //or null (on error)

    try {
        const response = await axios.get('https://coinhub-article-api.onrender.com/get-all-articles');
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }

}

export default getAllArticles;