let Sequelize = require('sequelize')
let connection = require('./sequelize-connection')

let country = connection.define('country',{
  code: {
    type: Sequelize.STRING,
    field: 'code'
  },
  name: {
    type: Sequelize.STRING,
    field: 'name'
  },
  continent: {
    type: Sequelize.STRING,
    field: 'continent'
  },
  region: {
    type: Sequelize.STRING,
    field: 'region'
  }
})

module.exports = country
