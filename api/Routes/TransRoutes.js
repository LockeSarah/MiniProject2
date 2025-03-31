import express from "express";
export const transRouter = express.Router();
import pool from "./PoolConnection.js"

// Display all transactions
transRouter.get("/transactions", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM transactions");
        res.json({ rows: result.rows });
        // console.log(result.rows.length);
    } catch (error) {
        console.error("Query error:", error);
        res.status(500).json({ error: "Database query failed" })
    }
});

// Display specific transaction
transRouter.get("/getTransaction", async (req, res) => {
    try {
        var id = req.query.id;
        const result = await pool.query("SELECT * FROM transactions WHERE id =" + id);
        res.json({ rows: result.rows });
    } catch (error) {
        console.error("Query error:", error);
        res.status(500).json({ error: "Database query failed" })
    }
});

// Delete specific transaction
transRouter.get("/delTransaction", async (req, res) => {
    try {
        var id = req.query.id;
        console.log(id);
        const result = await pool.query("DELETE * FROM transactions WHERE id =" + id);
        console.log(result);
        res.json({ ans: 1 });
    } catch (error) {
        console.error("Query error:", error);
        res.json({ ans: 0});
    }
});

export default transRouter;