// require('dotenv').config()

const express = require('express')
const app = express()


// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views'); // specify the views directory


// static files
app.use(express.static(__dirname + "/public"))


app.get('/', function (req, res) {
  // res.send('Hello World')
  res.render('index', {titulo: 'mi titulo dinamico'})
})


app.get('/servicios', function (req, res) {
  // res.send('Hello World')
  res.render('servicios', {titulo: 'Mis Servicios'})
})

app.get('/nosotros', function (req, res) {
  // res.send('Hello World')
  res.render('nosotros', {titulo: 'Sobre Nosotros'})
})

app.get('/contacto', function (req, res) {
  // res.send('Hello World')
  res.render('contacto', {titulo: 'Contactame'})
})

app.use((req, res, next) => {
  res.render('404', ({titulo: 'Pagina no encontrada'}))
})

// app.use((req, res, next) => {
//   res.status(404).sendFile(__dirname + "/public/404.html")
// })

app.listen(process.env.PORT, () => console.log(process.env.PORT))