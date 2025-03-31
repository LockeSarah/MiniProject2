import express from "express";
export const rolesRouter = express.Router();
import pool from "./PoolConnection.js"

// Display all roles
rolesRouter.get("/roles", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM roles");
        res.json({ rows: result.rows });
    } catch (error) {
        console.error("Query error:", error);
        res.status(500).json({ error: "Database query failed" })
    }
});

// Display specific role
rolesRouter.get("/getRole", async (req, res) => {
    try {
        var id = req.query.id;
        const result = await pool.query("SELECT * FROM roles WHERE id =" + id);
        res.json({ rows: result.rows });
    } catch (error) {
        console.error("Query error:", error);
        res.status(500).json({ error: "Database query failed" })
    }
});

// Delete specific role
rolesRouter.get("/delRole", async (req, res) => {
    try {
        var id = req.query.id;
        console.log(id);
        const result = await pool.query("DELETE * FROM roles WHERE id =" + id);
        console.log(result);
        res.json({ ans: 1 });
    } catch (error) {
        console.error("Query error:", error);
        res.json({ ans: 0});
    }
});

export default rolesRouter;
