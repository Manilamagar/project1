const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Transaction', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    book_id: { type: DataTypes.INTEGER, allowNull: false },
    issue_date: { type: DataTypes.DATE, allowNull: false },
    due_date: { type: DataTypes.DATE, allowNull: false },
    return_date: { type: DataTypes.DATE },
    fine: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0 },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, {
    timestamps: false,
    indexes: [{ fields: ['due_date'] }],
    foreignKeys: [
      { field: 'user_id', references: { model: 'Users', key: 'id' } },
      { field: 'book_id', references: { model: 'Books', key: 'id' } },
    ],
  });
};