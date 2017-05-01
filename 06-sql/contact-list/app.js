let Contact = require('./models').Contact

Contact.create({
  name: 'Bob',
  email: 'bob@bobber.com'
}).then(function(contact){
  console.log(contact.get())

  return contact.createPhone({
    number: '222-333-4444',
    description: 'home'
  })
})
.then(function(phone){
  console.log("New Phone", phone.get())
}).catch(function(error){
  console.log(error)
})



