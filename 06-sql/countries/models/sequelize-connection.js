let Sequelize = require('sequelize')

module.exports = new Sequelize( 'countries', '','', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idel: 10000
  }
})


