class RegistrationStore{
  constructor(){
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
    this.errors = {}
  }

  getFields(){
    return this.fields
  }

  getErrors(){
    // {}
    // or
    // {firstName: 'is requires'}
    return this.errors
    
  }

  validate(){
    this.errors = {}
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePresence('password')
    this.validateEmail('email')
    
  }

  validatePresence(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
    }
  }


  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not an email')
    }
  }

  addError(fieldName, message){
    this.errors[fieldName] = message
  }
}


const store = new RegistrationStore()
export default store
