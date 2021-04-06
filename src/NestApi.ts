
const API = 'https://spicio-api.herokuapp.com/tasks'

export interface Server{
    _id: string
    idMovie: string
    title: string
    poster: string
    ratings: string
    __v: number
}

export const requestApiGetAll = async () =>{
    
    
    const req = await fetch(API);
    return await req.json();


    //const req = await fetch(`${API_BASE}${API_KEY}s=${value}&page=20`);
    //const req = await fetch('http://www.omdbapi.com/?apikey=ce7a9b40&t=avengers&plot=full');
    //const json = await req.json();
}

export const requestApiCreate = async (movie: Server) =>{
    const respost = await fetch(API, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            idMovie: movie.idMovie,
            title: movie.title,
            poster: movie.poster,
            ratings: movie.ratings
        })
    });
}


export const requestApiDelete = async (id: string) =>{
    const respost = await fetch(API + '/' + id, {method: 'delete'});
}