const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

    async function getMovies () {
        const resp = await fetch (APIURL);
        const respData = await resp.json();

        console.log(respData);

        return respData;
    }

getMovies();


/*
https://github.com/florinpop17/10-projects-10-hours/blob/master/movie-app/script.js
*/