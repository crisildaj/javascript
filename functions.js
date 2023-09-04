const movies = [
    {"title": "Jaws", "director": "Steven Spielberg", "year": "1975"},
    {"title": "Star Wars", "director": "George Lucas", "year": "1977"},
    {"title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018"},
    {"title": "Top Gun", "director": "Tony Scott", "year": "1986"},
    {"title": "Justice League", "director": "Zack Snyder", "year": "2017"}
];

// // Part 1 - Create a function to find a movie and output it's detail
// function findMovie(movieTitle) {
//     for (const movie of movies) {
//         if (movie.title === movieTitle) {
//             console.log("found", movie)}
    
        
// } } 

        

// Part 2 = Create a function to return a movie object
function returnMovie (movieTitle) {
    for (const movie of movies) {
        if (movie.title === movieTitle) {
            return movie
            
        }
        // console.log("found", movie)
    }
    // console.log("Any text, any text at all")
    console.log("Movie not found")
    
}

let myMovie = returnMovie ("Avengers: Infinity War")
console.log(myMovie)

console.log ("The movie", myMovie.title, "directed by", myMovie.director, "was released in", myMovie.year);

let myOtherMovie = returnMovie ("Thor.Ragnorok")
console.log(myOtherMovie)

function myMovieDetails (anyMovie) {
    if (typeof anyMovie=== 'object') {
        return("Type is an object")
    }
    else {
        return anyMovie
    }
}
console.log(myMovieDetails(myOtherMovie))

console.log(myMovieDetails(returnMovie("Jaws")))