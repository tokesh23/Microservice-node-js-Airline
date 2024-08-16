'use strict';
const {
  Model,
  BelongsTo,
  BelongsToMany
} = require('sequelize');


const bcrypt = require("bcrypt");
const {SALT} = require("../config/serverConfig")

module.exports = (sequelize, DataTypes) => {
  class User extends Model {


    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    this.BelongsToMany(models.Role,{
      throw: 'User_Roles'
      
    })
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }

    },
    password:
    {
      type: DataTypes.STRING,
      allowNull: false,
      allowNull: false,
      validate: {
        len: [3, 100]
      }

    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user)=>{
    // console.log(user);
    
    const encryptPassword= bcrypt.hashSync(user.password,SALT); //change or convert password method or code
    user.password= encryptPassword;
  })

  return User;
};