import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID FKf1Z9zdsI2pF0OwuaFL7f-a9ZLKyE4r5nEccjZm7Co",
  },
});
