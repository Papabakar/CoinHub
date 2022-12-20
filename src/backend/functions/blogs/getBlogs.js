//async function that retrieves all blog data from database

import axios from 'axios';

export const getAllBlogs = async () => {

    //will return either a list of JSON object (blogs)
    //or null (on error)

    try {
        const response = await axios.get('https://coinhub-article-api.onrender.com/get-all-blogs');
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }

}

export const getBlogBySection = async (section) => {

  //will return either a list of JSON object (blogs in this section)
  //or null (on error)

  try {
      const response = await axios.get(`https://coinhub-article-api.onrender.com/get-blog-section?section=${section}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }

}
