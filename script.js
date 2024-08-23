const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=05bd4ea10ac557ad598a7562ab90b7fc&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=05bd4ea10ac557ad598a7562ab90b7fc&query='


const form = document.getElementById('form');
const search = document.getElementById('query');
const moviecontainer = document.querySelector('.moviecontainer')
returnMovies(APILINK);
function returnMovies(url){
    fetch(url)
        .then(res=> res.json())
        .then(data => {
            console.log(data.results);

            data.results.forEach(element => {
                const container = document.createElement('div');
                container.setAttribute('class','container');
                const image = document.createElement('img')
                image.setAttribute('class','thumbnail')
                const paragraph = document.createElement('p')
                paragraph.setAttribute('class','title')
                const button = document.createElement('button')
                button.setAttribute('class','button')
                const img_url = IMG_PATH + element.poster_path
                container.innerHTML = `
                    <img  class='thumbnail' src='${img_url}' >
                    <p class='title'>${element.title}  <button class='button'>Watch Now!!</button></P>
                `
                container.appendChild(image);
                container.appendChild(paragraph);
                container.appendChild(button)
                moviecontainer.appendChild(container);
        });
        
    });
}

form.addEventListener('submit', e => {
    e.preventDefault();
    moviecontainer.innerHTML = '';
    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCH_API + searchItem)
        search.value = '';
    }

}) 