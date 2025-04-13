import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
import rolesRouter from "./Routes/RolesRoutes.js";
import usersRouter from "./Routes/UsersRoutes.js";
import movieRouter from "./Routes/MovieRoutes.js";

import pool from "./Routes/PoolConnection.js";

const app=express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use("/roles", rolesRouter);
// app.use("/users", usersRouter);
app.use("/browse", movieRouter);

app.get("/",(req,res)=>{
  try { res.send("Mini Project 2"); }
  catch (error) { console.error("Query error:", error);
  res.send(" Sorry Error")
  }
});
// Display all movies
app.get("/movies", async (req, res) => {
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
app.get("/getMovie", async (req, res) => {
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
app.get("/deleteMovie", async (req, res) => {
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

app.listen(3000, () => console.log("Server ready on port 3000."));