import axios from "axios";

export default axios.create({
  //we gone to call create methot on the axios object and gone pass object here
  //baseURL is nothing but the Spring base API url
  baseURL: "http://localhost:8080/api",
  headers: {
    "Contect-type": "application/json",
  },
});
