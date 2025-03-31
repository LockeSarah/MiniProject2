import express from "express";
export const usersRouter = express.Router();
import pool from "./PoolConnection.js"

// Display all users
usersRouter.get("/users", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.json({ rows: result.rows });
        // console.log(result.rows.length);
    } catch (error) {
        console.error("Query error:", error);
        res.status(500).json({ error: "Database query failed" })
    }
});

// Display specific user
usersRouter.get("/getUser", async (req, res) => {
    try {
        var id = req.query.id;
        const result = await pool.query("SELECT * FROM users WHERE id =" + id);
        res.json({ rows: result.rows });
    } catch (error) {
        console.error("Query error:", error);
        res.status(500).json({ error: "Database query failed" })
    }
});

// Delete specific user
usersRouter.get("/delUser", async (req, res) => {
    try {
        var id = req.query.id;
        console.log(id);
        const result = await pool.query("DELETE * FROM users WHERE id =" + id);
        console.log(result);
        res.json({ ans: 1 });
    } catch (error) {
        console.error("Query error:", error);
        res.json({ ans: 0});
    }
});

export default usersRouter;