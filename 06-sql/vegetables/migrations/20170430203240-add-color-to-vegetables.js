'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Vegetables', 'color', Sequelize.STRING)
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Vegetables', 'color')
  }
};
