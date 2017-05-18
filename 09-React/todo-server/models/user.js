'use strict';
const uuid = require('uuid/v1')
const crypto = require('crypto')

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    password: DataTypes.STRING,
    authToken: DataTypes.STRING,
    authTokenExpiration: DataTypes.DATE,
    salt: DataTypes.STRING
  }, {
    instanceMethods: {
      toJSON: function(){
        return {
          id: this.id,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          authToken: this.authToken,
          authTokenExpiration: this.authTokenExpiration 
        }
      },
      setAuthToken: function(){
        this.authToken = uuid()

        let expiration = new Date()
        expiration.setMonth(expiration.getMonth() + 1)
        this.authTokenExpiration = expiration
      },
      setSalt: function(){
        this.salt = uuid()
      },
      getEncryptedPassword: function(password){
        const hash = crypto.createHmac('sha512', this.salt.toString())
        hash.update(password.toString())
        return hash.digest('hex')
      },
      encryptPassword: function(){
        this.password = this.getEncryptedPassword(this.password)
      },
      verifyPassword: function(password){
        let unverifiedPassword = this.getEncryptedPassword(password)
        return this.password === unverifiedPassword
      }
    },
    hooks:{
      beforeCreate: function(user, options){
        user.setAuthToken()
        user.setSalt()
        user.encryptPassword()
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
