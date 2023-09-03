const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(require('cors')())

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    try {
        res.render("index")
    } catch (error) {
        res.status(404).render('404')
    }
})

app.get('/:rt', (req, res) => {
    try {
        res.render(req.params.rt?req.params.rt:"index")
    } catch (error) {
        res.status(404).render('404')
    }
})
app.listen(port, () => console.log('server running'))