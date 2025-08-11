module.exports = (sequelize, DataTypes) => {
  const Borrow = sequelize.define("Borrow", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    borrowDate: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
    returnDate: { type: DataTypes.DATEONLY },
    status: { type: DataTypes.ENUM("Borrowed", "Returned"), defaultValue: "Borrowed" }
  });
  return Borrow;
};
