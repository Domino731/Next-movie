export const fetchGenres = () => {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US');
   

}