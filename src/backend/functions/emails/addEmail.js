//async function that retrieves all blog data from database

import axios from "axios";

const addEmailSubscriber = async (data) => {
  try {
    const response = await axios.post(
      "https://coinhub-article-api.onrender.com/save-email-sub",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default addEmailSubscriber;
