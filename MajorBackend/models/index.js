const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)
sequelize.authenticate()
    .then(() => {
        console.log("connected..");
    })
    .catch((err) => {
        console.log(err);
    })







const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.UserNameEmail = require("./UserModel/userNameEmailModel")(sequelize, DataTypes)
db.UserData = require("./UserModel/userDataModel")(sequelize, DataTypes)
db.sequelize.sync({ force: false })
    .then(() => {
        console.log("reSync done");
    })

db.UserNameEmail.hasOne(db.UserData, {
    foreignKey: "user_id"
})
db.UserData.belongsTo(db.UserNameEmail,
    {
        foreignKey: "user_id"
    })


module.exports = db  