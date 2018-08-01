
const express = require('express');
const app = express();
const port = process.env.PORT || 8000
const bodyparser = require('body-parser')


app.disable('x-powered-by');
app.use(bodyparser.json())



















// 500s Error Handling
app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

// 404s Error Handling
app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

app.listen(port, () => {
  console.log(`listening on port ${port}!`)
})





module.exports = app
