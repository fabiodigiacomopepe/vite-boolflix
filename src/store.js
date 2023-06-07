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
    bandiere: [
        {
            "id": 1,
            "name": "tedesca",
            "abbreviazione": "de",
            "path": "src/assets/img/de.png"
        },
        {
            "id": 2,
            "name": "spagnola",
            "abbreviazione": "es",
            "path": "src/assets/img/es.png"
        },
        {
            "id": 3,
            "name": "francese",
            "abbreviazione": "fr",
            "path": "src/assets/img/fr.png"
        },
        {
            "id": 4,
            "name": "inglese",
            "abbreviazione": "en",
            "path": "src/assets/img/en.png"
        },
        {
            "id": 5,
            "name": "italiana",
            "abbreviazione": "it",
            "path": "src/assets/img/it.png"
        },
    ],
});