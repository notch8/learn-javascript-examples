'use strict';
module.exports = function(sequelize, DataTypes) {
  var TodoList = sequelize.define('TodoList', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        TodoList.hasMany(models.Todo,{
          foreignKey: 'todoListId',
          as: 'todos'
        }) 
      }
    }
  });
  return TodoList;
};
