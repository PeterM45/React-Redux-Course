import axios from "axios";

const KEY = "AIzaSyCycwze5qKVu1oNZzR8wpEjtqFOpHj343s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
