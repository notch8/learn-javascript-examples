class Registration{
  constructor(){
    this.fields = {
      firstName: '',
      email: '',
      lastName: '',
      password: ''
    }
    this.errors = {}
  }

  getFields(){
    return this.fields
  }

  getErrors(){
    return this.errors
  }

  validate(){
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePresence('password')
    this.validateEmail('email')
  }

  validatePresence(fieldName){
    if(!this.fields[fieldName] || this.fields[fieldName] === ''){
      this.errors[fieldName] = `is Required`
    }else{
      delete this.errors[fieldName]
    }
  }

  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
    if (!filter.test(this.fields[fieldName])){
      this.errors[fieldName] = 'is not an email'
    }else{
      delete this.errors[fieldName]
    }
  }
}

export default new Registration()
