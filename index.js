const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, repellendus')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
