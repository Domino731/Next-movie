export const movieGenres = (state = [], action) => {
switch(action.type){
    case 'CHANGE_MOVIE_GENRES':
        return action.genres;
    default:
        return []
}
}