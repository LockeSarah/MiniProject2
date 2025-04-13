import express from "express";
export const movieRouter = express.Router();
import pool from "./PoolConnection.js"

// Display all movies
movieRouter.get("/movie", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM movies");
        res.json({ rows: result.rows });
        // console.log(result.rows.length);
    } catch (error) {
        console.error("Query error:", error);
        res.status(500).json({ error: "Database query failed" })
    }
});

// Display specific movie
movieRouter.get("/getMovie", async (req, res) => {
    try {
        var id = req.query.id;
        const result = await pool.query("SELECT * FROM movies WHERE id =" + id);
        res.json({ rows: result.rows });
    } catch (error) {
        console.error("Query error:", error);
        res.status(500).json({ error: "Database query failed" })
    }
});

// Delete specific movie
movieRouter.delete("/deleteMovie", async (req, res) => {
    try {
        var id = req.query.id;
        console.log(id);
        const result = await pool.query("DELETE * FROM movie WHERE id =" + id);
        console.log(result);
        res.json({ ans: 1 });
    } catch (error) {
        console.error("Query error:", error);
        res.json({ ans: 0});
    }
});

// Update specific movie
movieRouter.put("/updateMovie", async (req, res) => {
    try {
        var id = req.query.id;
        const { title, genre, release_year } = req.body;
        const result = await pool.query(
            "UPDATE movies SET title = $1, genre = $2, release_year = $3 WHERE id = $4",
            [title, genre, release_year, id]
        );
        res.json({ ans: 1 });
    } catch (error) {
        console.error("Query error:", error);
        res.json({ ans: 0 });
    }
});

export default movieRouter;