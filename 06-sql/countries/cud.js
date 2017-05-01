let connection = require('./models/sequelize-connection')

let Country = require('./models/country')

//let genovia = Country.build({
//  code: 'GEN',
//  name: 'Genovia',
//  continent: 'Europe',
//  region: 'Make Believe'
//})

//genovia.save()
//  .then(function(){
//    //whatever you need to do afterwards
//  })
//  .catch(function(error){
//  })

//let florin = Country.create({
//  code: 'FLR',
//  name: 'Florin',
//  continent: 'Europe',
//  region: 'Make Believe'
//})
//  .then(function(){
//    //whatever you need to do afterwards
//  })
//  .catch(function(error){
//  })

//Country.all({
//where: {
//  region: 'Make Believe'
//}
//})
//.then(function(records){
//  let promises = records.map(function(country){
//    return country.destroy()
//  })
  
//  return Promise.all(promises)
//})
//.then(function(results){
//  console.log("They're gone!")
//})


let florin = Country.create({
  code: 'FLR',
  name: 'Florin',
  continent: 'Europe',
  region: 'Make Believe'
})
  .then(function(country){
    country.region = "Storyland" 
    return task.save() // a promise
  })
  .catch(function(error){
  })


