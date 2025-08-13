module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Transaction', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    bookId: { type: DataTypes.INTEGER, allowNull: false },
    type: { type: DataTypes.ENUM('borrow','return'), allowNull: false },
    status: { type: DataTypes.ENUM('pending','completed'), defaultValue: 'pending' },
    borrowedAt: { type: DataTypes.DATE },
    returnedAt: { type: DataTypes.DATE }
  }, { tableName: 'transactions', timestamps: true });
};
