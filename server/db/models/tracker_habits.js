module.exports = (sequelize, DataTypes) => {
    const Tracker_Habits = sequelize.define("Tracker_Habits", {}, {timestamps: false})

    Tracker_Habits.associate = (models) => {
        models.Tracker.belongsToMany(models.Habits, {through: Tracker_Habits})
        models.Habits.belongsToMany(models.Tracker, {through: Tracker_Habits})
    }

    return Tracker_Habits
}