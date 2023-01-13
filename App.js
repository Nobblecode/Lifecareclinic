const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(require('cors')())

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => res.render('home'))
app.listen(port, () => console.log('server running ohh'))