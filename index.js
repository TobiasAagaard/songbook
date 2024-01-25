import express from 'express'
import dotenv from "dotenv"
import db from './db.config.js'

db.query(`SELECT id,title FROM song `, (err, result) => {
    console.log(result)
    
  });

const app = express();

dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("welcome to my API")
})

app.get("/contact", (req, res) => {
    res.send(`<h1>Contact</h1>`)
})

app.get("/api", (req, res) => {
   db.query(`SELECT id,title FROM song `, (err, result) => {
    if (err) {
        console.log(err)
    } else {
        res.json(result)
    }
   })
    
})

app.listen(port, () => {
    console.log("server runs on port port 4242: http://localhost:4242/")
})