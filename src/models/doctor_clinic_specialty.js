'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_Clinics_Speciatly extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Doctor_Clinics_Speciatly.init({
    doctorId: DataTypes.INTEGER,
    clinicId: DataTypes.INTEGER,
    clinicId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Doctor_Clinics_Speciatly',
  });
  return Doctor_Clinics_Speciatly;
};