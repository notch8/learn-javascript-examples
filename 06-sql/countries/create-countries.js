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


let Country = sequelize.define('country',{
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

Country.sync({force: true}).then(()=>{
  [
    ['AFG', 'Afghanistan', 'Asia', 'Southern and Central Asia'],
    ['NLD', 'Netherlands','Europe','Western Europe'],
    ['ALB', 'Albania', 'Europe', 'Southern Europe'],
    ['DZA', 'Algeria', 'Africa', 'Northern Africa']
  ].forEach(function(attrs){
    Country.create({
      code: attrs[0],
      name: attrs[1],
      continent: attrs[2],
      region: attrs[3]
    })
  })
})
