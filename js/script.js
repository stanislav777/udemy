"use strict";


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "")
        while (personalMovieDB.count === "" || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    rememberMyFilm: function () {
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
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов")
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель")
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман")
        }
    },

    showMyDB: function (a) {
        if (!a) {
            console.log(personalMovieDB)
        }
    },


    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`)

            if (genre === "" || genre === null) {
                console.log('Вы ввели некоректные данные')
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },


    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    }
}


// let a = {
//     film: "tet",
//     time: 110,
//     actors: {
//         general: "Jon",
//         second: "Bil"
//     }
// }
// console.log(Object.keys(a).length);
//
// let t = 0;
// for (let key in a) {
//
//     if (typeof (a[key]) === "object") {
//         for (let i in a[key]) {
//             console.log(`В  ключе ${i} лежит значение ${a[key][i]} `)
//             t++
//         }
//     } else {
//         console.log(`В  ключе ${key} лежит значение ${a[key]} `)
//         t++
//     }
// }

// console.log(t);