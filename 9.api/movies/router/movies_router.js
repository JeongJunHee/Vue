const express = require('express');
const movie = require('../model/movies');
const router = express.Router();

router.get('/api/movies', showMovieList);
router.get('/api/movies/:id', showMovieDetail);
router.post('/api/movies', addMovie);
router.put('/api/movies/:id', updateMovie);
router.delete('/api/movies/:id', deleteMovie);

module.exports = router;

function showMovieList(req, res) {
    const result = movie.getMovieList();
    res.send(result);
}

async function showMovieDetail(req, res) {
    try {
        const movie_id = req.params.id;
        const result = await movie.getMovieDetail(movie_id);
        res.send(result);
    }
    catch ( error ) {
        res.status(error.code).send({msg:error.msg});
    }
}

async function addMovie(req, res) {
    try {
        const data = req.body;
        const result = await movie.addMovie(data);
        res.send(result);
    }
    catch ( error ) {
        res.status(error.code).send({msg:error.msg});
    }
}

async function updateMovie(req, res) {
    try {
        const movie_id = req.params.id;
        const data = req.body;
        const result = await movie.updateMovie(moviey_id, data);
        res.send(result);
    }
    catch ( error ) {
        res.status(error.code).send({msg:error.msg});
    }
}

async function deleteMovie(req, res) {
    try {
        const movie_id = req.params.id;
        const result = await movie.deleteMovie(moviey_id);
        res.send(result);
    }
    catch ( error ) {
        res.status(error.code).send({msg:error.msg});
    }
}