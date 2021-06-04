const express = require('express')
const axios =  require('axios')
const dotenv =  require('dotenv').config()
const app =  express()
const cors = require('cors')
const fs = require('fs')
const port =  process.env.PORT

app.use(cors())

app.get('/', (req, res) => {
    axios.get('http://www.omdbapi.com/?apikey='+process.env.API_KEY+'&t='+ process.env.MOVIE_TITLE)
    .then((response) => {
        res.json(response.data)
    })
    .catch((error)  => {
        console.log(error)
    })
})

app.get('/movies', (req, res) => {
    res.send('Here is the movies list!')
    console.log(process.env.MOVIE_TITLE)
})

app.listen(port, () => {
    console.log('Movidb version 1.0.0')
})