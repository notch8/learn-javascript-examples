let Sequelize = require('sequelize')

let sequelize = new Sequelize( 'countries', '','', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idel: 10000
  }
})


let MyCountry = sequelize.define('my_countries',{
  code: {
    type: Sequelize.STRING
  
  },
  name: {
    type: Sequelize.STRING 
  },
  continent: {
    type: Sequelize.STRING
  },
  region: {
    type: Sequelize.STRING
  }
})

MyCountry.sync({force: true})
  .then(function(){
    console.log('success!')
  })
  .catch(function(error){
    console.log(error)
  })


// Now that the Database is setup, we add some records
let countries = [
  {
    code: 'FLR',
    name: 'Florin',
    continent: 'Europe',
    region: 'Make Believe'
  },
  {
    code: 'GEN',
    name: 'Genovia',
    continent: 'Europe',
    region: 'Make Believe'
  }
]

function createCountries(){
  let promises = countries.map(function(country){
    return Promise.new(function(resolve,reject){
      return MyCountry.create(country)
    })
  })

  return Promise.all(promises)
}


