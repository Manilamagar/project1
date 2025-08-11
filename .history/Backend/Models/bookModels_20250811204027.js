module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    isbn: { type: DataTypes.STRING, unique: true },
    category: { type: DataTypes.STRING },
    quantity: { type: DataTypes.INTEGER, defaultValue: 1 }
  });
  return Book;
};
