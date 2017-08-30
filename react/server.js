const path = require('path')
const express = require('express')

const PORT = process.argv[2] || process.env.REACT_PORT || 3000
const WEBSITE_PATH = path.join(__dirname, 'website', 'index.html')
const PUBLIC_PATH = path.join(__dirname, 'website', 'public')

const app = express()

app.use('/public', express.static(PUBLIC_PATH))

app.get('*', (req, res) => {
  res.sendFile(WEBSITE_PATH)
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
