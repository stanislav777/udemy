"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms === "" || numberOfFilms === false || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

// start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};


function rememberMyFilm() {
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
}

// rememberMyFilm();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель")
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман")
    }
}

// detectPersonalLevel();


function showMyDB(a) {
    if (!a) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {

        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`)
    }
}
writeYourGenres();
console.log(personalMovieDB);
