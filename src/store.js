import { reactive } from "vue";

export const store = reactive({
    apiKey: "7fc62a2d6f8bd538e8506d8e5089f1cd",
    apiUrl: "https://api.themoviedb.org/3",
    apiUrlFilm: "/search/movie?api_key=",
    apiUrlSerie: "/search/tv?api_key=",
    apiSearch: "&query=",
    searchInput: "",
    arrayFilm: [],
    arraySerie: [],
});