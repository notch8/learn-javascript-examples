'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Todo.belongsTo(models.TodoList,{
          foreignKey: 'todoListId',
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Todo;
};
