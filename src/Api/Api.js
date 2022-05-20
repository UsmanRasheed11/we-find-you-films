import Axios from "axios";
export const imagePath = "/uploads/";
//config
 const URL = "http://localhost:8080/api";

const axios = Axios.create({
    baseURL: URL,
    timeout: 10000,
});


export const Cinema = {
    //cinema
    Add: async (data) => await axios.post("/cinema/add", data),
    getAll: async (data) => await axios.get("/cinema/getall", data),
    Delete: async (data) => await axios.post("/cinema/delete", data),
    getOne: async (data) => await axios.post("/cinema/getone", data),
    //cinema movies
    AddMovie: async (data) => await axios.post("/cinema/Movie/add", data),
    getoneMovies: async (data) => await axios.post("/cinema/Movie/getone", data),
    DeleteMovies: async (data) => await axios.post("/cinema/Movie/delete", data),
    getMovieByGenre: async (data) => await axios.post("/cinema/Movie/getByGenre", data),
    

};
export const Scraping = {
    //cinema
    ScrapingHandler: async (data) => await axios.post("/scraping", data),
};