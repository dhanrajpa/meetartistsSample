module.exports = (sequelize, DataTypes) => {
    const UserEmailPassword = sequelize.define("userEmailPasswords", {
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    })
    return UserEmailPassword
}