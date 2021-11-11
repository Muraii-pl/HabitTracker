module.exports = (sequelize, DataTypes) => {
    const Users_Tracker = sequelize.define("Users_Tracker", {}, {timestamps: false})

    Users_Tracker.associate = (models) => {
        models.Users.belongsToMany(models.Tracker, {through: Users_Tracker})
        models.Tracker.belongsToMany(models.Users, {through: Users_Tracker})
    }

    return Users_Tracker
}