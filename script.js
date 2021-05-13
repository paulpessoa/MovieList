const APIURL =
'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const IMGPATH = 'https://image.tmdb.org/t/p/w1280';    


    async function getMovies () {
        const resp = await fetch (APIURL);
        const respData = await resp.json();

        console.log(respData);


        respData.results.forEach(movie =>{
            const { poster_path, title, vote_average} = movie;
            
            const movieEl = document.createElement('div');
            movieEl.classList.add("movie");

            movieEl.innerHTML =`
            <img
            src="${IMGPATH + poster_path}"
            alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span>${vote_average}</span>
            </div>
            
            `;

            document.body.appendChild(movieEl);


        });

        return respData;
    }

getMovies();


/*
https://github.com/florinpop17/10-projects-10-hours/blob/master/movie-app/script.js






lista todas as imagens na tela.
    respData.results.forEach((movie) => {
    const img = document.createElement("img");
    img.src = IMGPATH + movie.poster_path;

    document.body.appendChild(img);
    });






*/











