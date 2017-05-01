var express = require('express');
var expressLayouts = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var app = express();
var TodoList = require('./models').TodoList
var Todo = require('./models').Todo

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(expressLayouts)


app.get('/', function (request, response) {
  TodoList.findAll().then(function(todoLists){
    response.render('index', {todoLists: todoLists})
  }).catch(function(error){
    response.send("Error, couldn't fetch TodoLists")
  })
})

app.get('/todo-list/:id', function(request, response){
  TodoList.findById(request.params.id, 
    {include: [{
      model: Todo, 
      as: 'todos'
    }]
  }).then(function(todoList){
    response.render('todo-list', {todoList: todoList, todos: todoList.todos})
  }).catch(function(error){
    response.send("Error, couldn't fetch TodoList")
  })
})

app.post('/todo-list/:todoListId/todo/:id/complete', function(request, response){
  Todo.findById(request.params.id).then(function(todo){
    todo.isComplete = true
    return todo.save()
  }).then(function(todo){
    response.redirect("/todo-list/" + request.params.todoListId)
  }).catch(function(error){
    response.send("Error, couldn't fetch Todo")
  })
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});

