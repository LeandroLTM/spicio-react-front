const API_KEY = 'apikey=ce7a9b40&';
const API_BASE = 'http://www.omdbapi.com/?';

export interface Film{
    title: string
    name: string
    poster: string
    ratings: string
}

export const requestApi = async (value: string) =>{
    
    //const req = await fetch(`${API_BASE}${API_KEY}s=${value}&page=20`);
    //const req = await fetch('http://www.omdbapi.com/?apikey=ce7a9b40&t=avengers&plot=full');
    //const json = await req.json();
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
    return [{
        title: 'teste',
        name:"asdasdasd",
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12'
    },{
        title: 'teste2',
        name: 'sadasdas',
        poster: "https://m.media-amazon.com/images/M/MV5BZDJjOTE0N2EtMmRlZS00NzU0LWE0ZWQtM2Q3MWMxNjcwZjBhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        ratings: '12'
    },{
        title: 'teste3',
        name: 'sadasdas',
        poster: "https://m.media-amazon.com/images/M/MV5BN2ZiOTc4NDItNzM4MS00NzUwLWI2NWYtNTIzNTlkZWEwNGU5XkEyXkFqcGdeQXVyODgxMDAxMjY@._V1_SX300.jpg",
        ratings: '12'
    },{
        title: 'teste4',
        name: 'sadasdas',
        poster: "https://m.media-amazon.com/images/M/MV5BOGFmYWJiNzMtYjJkNy00NDNiLTg1NTItZGU5ZTc2NDM0YWQyXkEyXkFqcGdeQXVyMjU5OTg5NDc@._V1_SX300.jpg",
        ratings: '12'
    },{
        title: 'teste4',
        name: 'sadasdas',
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12'
    },{
        title: 'teste4',
        name: 'sadasdas',
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12'
    },{
        title: 'teste4',
        name: 'sadasdas',
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12'
    },{
        title: 'teste4',
        name: 'sadasdas',
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        ratings: '12'
    }];
}
