import express from 'express';
import {movies, movieReviews, movieDetails} from './moviesData.js';
import {genres} from './movieGenres';
import uniqid from 'uniqid';

const router = express.Router();

//router.get('/movies', (req, res) => {
router.get('/movies', (req, res) => {
        res.json(movies);
        console.log("movies called in index.js");
});

router.get('/genres', (req, res) => {
    res.json(genres);
});

//Get movie details
//router.get('/movies/:id', (req, res) => {
router.get('/movies/:id', (req, res) => {
        const id = parseInt(req.params.id);
    if (movieDetails.id == id) {
        res.status(200).json(movieDetails);
    } else {
        res.status(404).json({
            message: 'The movie you requested could not be found.',
            status_code: 404
        });
    }
});

// Get movie reviews
//router.get('/movies/:id/reviews', (req, res) => {
router.get('/:id/reviews', (req, res) => {
        const id = parseInt(req.params.id);
    // find reviews in list
    if (movieReviews.id == id) {
        res.status(200).json(movieReviews);
    } else {
        res.status(404).json({
            message: 'Unable to get reiews - the movie you requested could not be found.',
            status_code: 404
        });
    }
});

//Post a movie review
//router.post('/movies/:id/reviews', (req, res) => {
router.post('/:id/reviews', (req, res) => {
        const id = parseInt(req.params.id);

    if (movieReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        movieReviews.results.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'Unable to post review - the movie you requested could not be found.',
            status_code: 404
        });
    }
});

export default router;
