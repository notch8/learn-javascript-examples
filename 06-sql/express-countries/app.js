var express = require('express');
var app = express();
var Country = require('./models/country')
app.use(express.static('public'))
app.set('view engine', 'ejs')



app.get('/', function (request, response) {
  let countries = Country.findAll().then(function(countries){
    response.render('index', {countries: countries})
  })
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})

