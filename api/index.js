import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
import rolesRouter from "./Routes/RolesRoutes.js";
import usersRouter from "./Routes/UsersRoutes.js";
import transRouter from "./Routes/TransRoutes.js";

import pool from "./Routes/PoolConnection.js";

const app=express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/test", rolesRouter, usersRouter, transRouter);


/* // ********** Load environment variables ********** //
dotenv.config(); // Load environment variables
const { Pool } = pg;

const PORT = process.env.PORT || 3000;

// PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Neon DB
  },
});

pool.connect()
  .then(client => {
    console.log("Connected to Neon PostgreSQL database!");
    client.release();
  })
  .catch(err => console.error("Database connection error:", err.stack));
// ************************************************************** //

 app.get("/", async (req, res) => {
    try {
     
          res.send("Mini Project 2");
     
    } catch (error) {
      console.error("Query error:", error);
      res.send(" Sorry Error")
     
    }
  }); */

app.get("/",(req,res)=>{
  try { res.send("Mini Project 2"); }
  catch (error) { console.error("Query error:", error);
  res.send(" Sorry Error")
  }
});


/* //******************** Routes ******************** //
app.get("/roles", async (req, res) => {
  try {
      const result = await pool.query("SELECT * FROM roles");
      res.json({ rows: result.rows });
      // console.log(result.rows.length);
  } catch (error) {
      console.error("Query error:", error);
      res.status(500).json({ error: "Database query failed" })
  }
});
//******************** Routes ******************** //

//******************** Users ******************** //
app.get("/users", async (req, res) => {
  try {
      const result = await pool.query("SELECT * FROM users");
      res.json({ rows: result.rows });
      // console.log(result.rows.length);
  } catch (error) {
      console.error("Query error:", error);
      res.status(500).json({ error: "Database query failed" })
  }
});
//******************** Users ******************** //

//******************** Transactions ******************** //
app.get("/transactions", async (req, res) => {
  try {
      const result = await pool.query("SELECT * FROM transactions");
      res.json({ rows: result.rows });
      // console.log(result.rows.length);
  } catch (error) {
      console.error("Query error:", error);
      res.status(500).json({ error: "Database query failed" })
  }
});
//******************** Transactions ******************** // */

app.listen(3000, () => console.log("Server ready on port 3000."));