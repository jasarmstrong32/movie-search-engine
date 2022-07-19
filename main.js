const apiKey = import.meta.env.VITE_API_KEY;

const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');

//load movies from API
async function loadMovies(searchTerm){
  const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=${apiKey}`;
  const res = await fetch(`${URL}`);
  const data = await res.json();
  // console.log(data.Search);
  if(data.Response = "True") displayMovieList(data.Search);
}

function findMovies(){
  let searchTerm = (movieSearchBox.value).trim();
  if(searchTerm.length > 0){
    searchList.classList.remove('hide-search-list');
    loadMovies(searchTerm);
  } else {
    searchList.classList.add('hide-search-list')
  }
}

function displayMovieList(movies){
  searchList.innerHTML = "";
  for(let i = 0; i < movies.length; i++){
    let movieListItem = document.createElement('div');
    console.log(movieListItem);
  }
}
