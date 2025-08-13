module.exports = (sequelize, DataTypes) => {
  return sequelize.define('PendingUser', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM('pending','approved','rejected'), defaultValue: 'pending' }
  }, { tableName: 'pending_users', timestamps: true });
};
