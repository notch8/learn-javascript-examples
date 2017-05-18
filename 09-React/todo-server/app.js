var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var User = require('./models').User

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', function (request, response) {
  response.json({message: 'Todo API'})
});

app.post('/users', (request, response)=>{
  let user = User.create({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: request.body.password
  }).then((user)=>{
    response.json({
      message: 'Success',
      user: user
    })
  }).catch((error)=>{
    console.log(error)
    response.status(400)
    response.json({
      errors: error.errors
    })
  })
})

app.get('/users/:id', (request, response)=>{
  User.find({where: {id: request.params.id}}).then(function(user){
    if(user){
      response.json({user: user})
    }else{
      response.status(404)
    }
  })
})

app.get('/token', (request, response)=>{
  User.find({where: {email: request.query.email}}).then(function(user){

    if(user.verifyPassword(request.query.password)){
      response.json({
        authToken: user.authToken, 
        authTokenExpiration: user.authTokenExpiration
      })
    }else{
      response.status(400)
      response.json({message: 'Failed!'})
    }
  }).catch(function(e){
    response.status(400)
    response.json({message: 'Failed!'})
  })
})

app.listen(3000, function () {
 console.log('Todo Server listening on port 3000!');
});

