const fs = require('fs');

class Movie {
    constructor() {
        const data = fs.readFileSync('./model/data.json');
        this.data = JSON.parse(data)
    }

    getMovieList() {
        if (this.data) {
            return this.data;
        }
        else {
            return [];
        }
    }

    getMovieDetail(movie_id) {
        return new Promise((resolve, reject) => {
            for (var movie of this.data ) {
                if ( movie.id == movie_id ) {
                    resolve(movie);
                    return;
                }
            }
            reject({msg:'Can not find story', code:404});
        });
    }

    addMovie(movie) {
        return new Promise((resolve, reject) => {
            let last = this.data[this.data.length - 1];
            let id = last.id + 1;
            let newMovie = {
                "id" : id,
                "title" : movie.title,
                "director" : movie.director,
            };
            this.data.push(newMovie)
            resolve(newMovie);
        });
    }

    updateMovie(movie_id, data) {
        return new Promise((resolve, reject) => {
            for (var movie of this.data ) {
                if ( movie.id == movie_id ) {
                    movie.title = data.title;
                    movie.director = data.director;
                    resolve(movie);
                    return;
                }
            }
            reject({msg:'Can not find story', code:404});
        });
    }

    deleteMovie(movie_id) {
        return new Promise((resolve, reject) => {
            var index = 0;
            for (var movie of this.data ) {
                if ( movie.id == movie_id ) {
                    this.data.splice(index, 1);
                    resolve(movie);
                    return;
                }
                index++;
            }
            reject({msg:'Can not find story', code:404});
        });
    }
}

module.exports = new Movie();