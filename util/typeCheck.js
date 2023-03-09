export const typeCheck = (type) => {
    if(type === 'movie') {
        return 'movies'
    }else if ( type === 'tv' ){
        return 'series'
    }
}