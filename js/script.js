// const a = "4";
// let b = "5"
//
// // const arr = [];
// // arr[0] = prompt("как твое имя?", " 54 ")
// // arr[1] = prompt("как твое день рождения", " 54 ")
// // arr[2] = prompt("как твое фамилия?", " 54 ")
// //
// // console.log(arr);
// //
// console.log(+a + +b );
// // console.log(`${a} дядя ${b}.`)
// let x = 3,
//     s = 5;

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let lustFilm = prompt("Какой последний фильм вы просмотрели?"),
    starFilm = prompt("На сколько оцените его?");
let lustFilm1 = prompt("Какой последний фильм вы просмотрели?"),
    starFilm2 = prompt("На сколько оцените его?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.movies[lustFilm]=starFilm;
personalMovieDB.movies[lustFilm1]=starFilm2;


console.log(personalMovieDB)
