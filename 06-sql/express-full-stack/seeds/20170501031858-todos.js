'use strict';

let TodoList = require('../models').TodoList

module.exports = {
  up: function (queryInterface, Sequelize) {
    return TodoList.findAll().then(function(lists){
      let todoPromises = lists.map(function(list){
        return queryInterface.bulkInsert('Todos', 
        [
          {
            name: 'task 1',
            isComplete: false,
            todoListId: list.get('id'),
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'task 2',
            isComplete: false,
            todoListId: list.get('id'),
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ])
      })
      return Promise.all(todoPromises) 
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos', null, {})
  }
};
