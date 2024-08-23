const APILINK = 'https://api.themoviedb.org/discover/movie?sort_by=popularity.desc&api_key=32fef82679395e819c874092767ea15c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=32fef82679395e819c874092767ea15c&query='



returnMovies(APILINK);
function returnMovies(url) {
    fetch(url)
      .then(res=> res.json())
      .then(data => {
        console.log(data);
      })
}