const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE = process.env.REACT_APP_API_BASE;

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
    const req = await fetch(`${API_BASE}${API_KEY}t=${value}`);
    const json = await req.json();
    return json.imdbRating;
    //return '10';
}

export const requestApi = async (value: string) =>{
    const req = await fetch(`${API_BASE}${API_KEY}s=${value}`);
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

    /*
    return [{Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
            Awards: "Nominated for 1 Oscar. Another 38 wins & 79 nominations.",
            BoxOffice: "$623,357,910",
            Country: "USA",
            DVD: "22 Nov 2015",
            Director: "Joss Whedon",
            Genre: "Action, Adventure, Sci-Fi",
            Language: "English, Russian, Hindi",
            Metascore: "69",
            Plot: "Nick Fury is the director of S.H.I.E.L.D., an international peace-keeping agency. The agency is a who's who of Marvel Super Heroes, with Iron Man, The Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When global security is threatened by Loki and his cohorts, Nick Fury and his team will need all their powers to save the world from disaster.",
            Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            Production: "Marvel Studios",
            Rated: "PG-13",
            Released: "04 May 2012",
            Response: "True",
            Runtime: "143 min",
            title: "The Avengers",
            Type: "movie",
            Website: "N/A",
            Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
            Year: "2012",
            imdbID: "tt0848228",
            imdbRating: "8.0",
            imdbVotes: "1,268,647"},

            {Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
            Awards: "Nominated for 1 Oscar. Another 38 wins & 79 nominations.",
            BoxOffice: "$623,357,910",
            Country: "USA",
            DVD: "22 Nov 2015",
            Director: "Joss Whedon",
            Genre: "Action, Adventure, Sci-Fi",
            Language: "English, Russian, Hindi",
            Metascore: "69",
            Plot: "Nick Fury is the director of S.H.I.E.L.D., an international peace-keeping agency. The agency is a who's who of Marvel Super Heroes, with Iron Man, The Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When global security is threatened by Loki and his cohorts, Nick Fury and his team will need all their powers to save the world from disaster.",
            Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            Production: "Marvel Studios",
            Rated: "PG-13",
            Released: "04 May 2012",
            Response: "True",
            Runtime: "143 min",
            Title: "The Avengers 2",
            Type: "movie",
            Website: "N/A",
            Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
            Year: "2012",
            imdbID: "tt0848228",
            imdbRating: "8.0",
            imdbVotes: "1,268,647"}];
    */

    /*
    return [{
        _id: "606a6c5274dbc016f8931191",
        idMovie: "idteste",
        title: 'teste',
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12',
        __v: 0
    },{
        _id: "606a6c5274dbc016f8931191",
        idMovie: "idteste",
        title: 'teste',
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12',
        __v: 0
    },{
        _id: "606a6c5274dbc016f8931191",
        idMovie: "idteste",
        title: 'teste',
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12',
        __v: 0
    },{
        _id: "606a6c5274dbc016f8931191",
        idMovie: "idteste",
        title: 'teste',
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12',
        __v: 0
    },{
        _id: "606a6c5274dbc016f8931191",
        idMovie: "idteste",
        title: 'teste',
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12',
        __v: 0
    },{
        _id: "606a6c5274dbc016f8931191",
        idMovie: "idteste",
        title: 'teste',
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12',
        __v: 0
    },{
        _id: "606a6c5274dbc016f8931191",
        idMovie: "idteste",
        title: 'teste',
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12',
        __v: 0
    },{
        _id: "606a6c5274dbc016f8931191",
        idMovie: "idteste",
        title: 'teste',
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12',
        __v: 0
    }];
    */
}
