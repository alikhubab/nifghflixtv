import axios from "axios";
export const baseURL = "https://api.themoviedb.org/3";
export const stripeServerBaseURL =
  "https://nightflixapi.netlify.app/.netlify/functions/api";

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI1OGFjM2M1ODdlNzJjOWJlZGE5NjkxZmExYmE3ZCIsInN1YiI6IjY0Y2EwYjdiZGQ4M2ZhMDBjNTE3ZjIyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jMHeGJuREzv3IHxUGiIBJjH91O1EGhMElBp7UAv2lf8`,
  },
});

export default instance;
