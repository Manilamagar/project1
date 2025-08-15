const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

module.exports = (sequelize) => {
  sequelize.define('PendingUser', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('student'), allowNull: false },
    status: { type: DataTypes.ENUM('pending', 'approved', 'rejected'), defaultValue: 'pending' },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, { timestamps: false, indexes: [{ unique: true, fields: ['email'] }] });
};
