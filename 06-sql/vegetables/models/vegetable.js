'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vegetable = sequelize.define('Vegetable', {
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    description: DataTypes.STRING,
    color: DataTypes.STRING  // <-- the new part
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Vegetable;
};
