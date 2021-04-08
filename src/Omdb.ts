const API_KEY = process.env.REACT_APP_API_OMDB_KEY;
const API_BASE = process.env.REACT_APP_API_OMDB_BASE;

export interface Movieimcomplet{
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string,
}

export interface Moviecompleted{
    idMovie: string,
    title: string,
    poster: string,
    ratings: string,
}

export const requestRatings = async (value: string) =>{
    const req = await fetch(`${API_BASE}apikey=${API_KEY}&t=${value}`);
    const json = await req.json();
    return json.imdbRating;
}

export const requestApi = async (value: string) =>{
    const req = await fetch(`${API_BASE}apikey=${API_KEY}&s=${value}`);
    const json = await req.json();
    
    if(json.Response === 'True'){
        const jsonimcomplet: Movieimcomplet[] = json.Search;
        let filmimcomplet = jsonimcomplet.reduce((vec: Moviecompleted[],value)=>{
            vec.push({
                poster: value.Poster,
                title: value.Title,
                idMovie: value.imdbID,
                ratings: '',
            })
            return vec;
        },[]);
        return filmimcomplet;
    }

    return [];
}
