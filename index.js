import express from 'express'

const app = express();

app.get("/", (req, res) => {
    res.send('Velkommen')
})

app.listen(4000, () => {
    console.log('server køre på http://localhost:4000')
})