const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bedbfc1ef93424832c2125e1355a4572';

const TRENDING_MOVIE_URL = `${API_URL}/trending/movie/day?api_key=${API_KEY}`;
const TRENDING_TV_URL = `${API_URL}/trending/tv/day?api_key=${API_KEY}`;
const TRENDING_ALL_URL = `${API_URL}/trending/all/day?api_key=${API_KEY}`;

const MOVIE_NOW_PLAYING_URL = `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&region=us`;

const SEARCH_URL = `${API_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=`;

const MOVIE_DISCOVER_URL = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&region=us`;
const TV_DISCOVER_URL = `${API_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&region=us`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w780';

export {
   TRENDING_MOVIE_URL,
   TRENDING_ALL_URL,
   TRENDING_TV_URL,
   MOVIE_NOW_PLAYING_URL,
   MOVIE_DISCOVER_URL,
   TV_DISCOVER_URL,
   SEARCH_URL,
   API_URL,
   API_KEY,
   IMAGE_BASE_URL,
   BACKDROP_SIZE,
   POSTER_SIZE,
};
