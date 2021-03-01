
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let i = 0;
while (i < 2) {
    i++
    let lustFilm = prompt("Какой последний фильм вы просмотрели?"),
        starFilm = prompt("На сколько оцените его?");
    if (lustFilm != null && starFilm != null && lustFilm !== "" && starFilm !== "" && lustFilm.length <= 50 && starFilm.length <= 50) {
        personalMovieDB.movies[lustFilm] = starFilm;

    } else {
        console.log("error");
        i--
    }
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель")
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман")
}


console.log(personalMovieDB);
