
const express = require('express')
const app = express()
const axios = require('axios').default;
const port = 3001

app.get('/*', (req, res) => {
  res.set('Content-Type', 'text/plain');
  axios.get('https://api.sorare.com' + req.path).then((response) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.json(response.data)
  })
  
})
app.post('/*', (req, res) => {
  res.set('Content-Type', 'text/plain');
  axios.post('https://api.sorare.com' + req.path, req.body).then((response) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.json(response.data)
  })
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


