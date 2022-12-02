const express = require('express')
const app = express()
const port = 3000

app.use(require('cors')())

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => res.render('home'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))