const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Book = require("./Book")(sequelize, DataTypes);
db.User = require("./User")(sequelize, DataTypes);
db.Borrow = require("./Borrow")(sequelize, DataTypes);

// Relationships
db.User.hasMany(db.Borrow, { foreignKey: "userId" });
db.Borrow.belongsTo(db.User, { foreignKey: "userId" });

db.Book.hasMany(db.Borrow, { foreignKey: "bookId" });
db.Borro.belongsTo(db.Book, { foreignKey: "bookId" });

module.exports = db;
