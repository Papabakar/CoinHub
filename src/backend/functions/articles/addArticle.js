//async function that retrieves all blog data from database

import axios from "axios";

const addArticle = async (data) => {
  //  will be expecting articleData
  //  a JSON object in this format:
  //   {
  //     "title": "‘Foot massage to a criminal’: Musk on WSJ for Sam Bankman Fried story",
  //      "imageUrl": "https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  //      "viewCount": 26476,
  // }

  try {
    const response = await axios.post(
      "https://coinhub-article-api.onrender.com/create-article",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default addArticle;
