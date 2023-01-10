//async function that increase the view count of a blog

import axios from "axios";

const increaseBlogViewCount = async (id, currentViewCount) => {
  try {
    const response = await axios.post(
      `https://coinhub-article-api.onrender.com/increase-blog-view-count?id=${id}&viewCount=${currentViewCount}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default increaseBlogViewCount;
