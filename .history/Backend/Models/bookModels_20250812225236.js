module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: true },
    totalCopies: { type: DataTypes.INTEGER, defaultValue: 1 },
    availableCopies: { type: DataTypes.INTEGER, defaultValue: 1 },
    isbn: { type: DataTypes.STRING, allowNull: true }
  }, { tableName: 'books', timestamps: true });
};
