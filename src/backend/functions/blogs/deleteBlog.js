//async function that retrieves all blog data from database

import axios from "axios";

const deleteBlog = async (id) => {

  try {
    const response = await axios.delete(`https://coinhub-article-api.onrender.com/delete-blog?id=${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default deleteBlog;
