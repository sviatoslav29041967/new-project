" use strict ";

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};




function start() {
  numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели ?', '');
  while (numberOfFilms == "" || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели ?', '');

  }
}

start();




function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов ?', ''),
      b = prompt('На сколько оцените его ?', '');
  
  
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('ERROR');
      i--;
    }
  
  }
  
}

rememberMyFilms();


function detectPersonalLevel(){

if (personalMovieDB.count < 10) {
  console.log('мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('good');
} else if (personalMovieDB.count >= 30) {
  console.log('nice');

} else {
  console.log("ERROR");
}

}

detectPersonalLevel();

function showMyDB(){

if (personalMovieDB. privat == false) {
console.log( personalMovieDB );
}

}

function writeYouGenres() {
for (let i = 1; i <= 3; i++) {

personalMovieDB.genres[i - 1] = prompt( `Ваш любимый жанр под номером ${i}` );
}

}

console.log(personalMovieDB);