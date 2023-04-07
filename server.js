// ================ DEPENDENCIES =========== //
const express = require("express");
const app = express();
const cors = require('cors')
const movie = require('./models/db')
// ================ MIDDLEWARE ============= //
app.use(express.json());
app.use(cors());
// ================ ROUTES ================= //

// GET
app.get('/movies', async (req, res)=>{
    try{
        const allMovies = await movie.query('SELECT * FROM movielist')
        res.json(allMovies.rows)
    } catch (err) {
        console.log(err.message)
    }
})
// Show one 

app.get('/movie/:id', async (req, res)=>{
    try {
        const { id } = req.params
        const oneMovie = await movie.query('SELECT * FROM movielist WHERE id = $1', [id]);
        res.json(oneMovie.rows[0])
    } catch (err) {
        console.log(err.message);
    }
})
// POST
app.post('/movie', async (req, res)=>{
    try{

        const { title } = req.body;
        const { description } = req.body;
        const { poster } = req.body;
        const { genre } = req.body;
        const { type } = req.body;
        const { duration } = req.body;
        const { release_date } = req.body;
        const newMovie = await movie.query(`INSERT INTO movieList (title, description, poster, genre, type, duration, release_date) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [title, description, poster, genre, type, duration, release_date])
        res.json(newMovie.rows)

    } catch (err) {

        console.log(err.message);

    }
})
// DELETE

// UPDATE

app.listen(8000, () => {
    console.log("Listening ...")
});