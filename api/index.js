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
app.use("/movies", movieRouter);

app.get("/",(req,res)=>{
  try { res.send("Mini Project 2"); }
  catch (error) { console.error("Query error:", error);
  res.send(" Sorry Error")
  }
});

app.listen(3000, () => console.log("Server ready on port 3000."));