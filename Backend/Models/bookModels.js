const { DataTypes } = require('sequelize');
const Book = (sequelize) => {
  sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    isbn: { type: DataTypes.STRING, unique: true, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    available_quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, { timestamps: false, indexes: [{ unique: true, fields: ['isbn'] }, { fields: ['title'] }] });
};
module.exports = Book;