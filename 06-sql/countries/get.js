let connection = require('./models/sequelize-connection')

//connection.authenticate()
//  .then(function(){
//    console.log('success!')
//  })
//  .catch(function(error){
//    console.log(error)
//  })


let Country = require('./models/country')

//Country.findOne().then(function(country){
//  console.log(country.get('name'))
//})

//Country.all().then(function(countries){
//  let mapped = countries.map(function(country){
//    return country.get()
//  })
//  console.log(mapped)
//})

//Country
//  .all({limit: 2, offset: 1})
//  .then(function(countries){
//  let mapped = countries.map(function(country){
//    return country.get()
//  })
//  console.log(mapped)
//})

Country.all({
  where: {
    continent: 'Europe'
  },
  limit: 2
}).then(function(countries){
  let mapped = countries.map(function(country){
    return country.get()
  })
  console.log(mapped)
})




//Country.findById(1).then(function(country){
//  console.log(country.name)
//})


