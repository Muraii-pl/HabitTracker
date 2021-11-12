module.exports = (sequelize, DataTypes) => {
    const Habits_Days = sequelize.define("Habits_Days", {}, {timestamps: false})

    Habits_Days.associate = (models) => {
        models.Days.belongsToMany(models.Habits, {through: Habits_Days})
        models.Habits.belongsToMany(models.Days, {through: Habits_Days})
    }

    return Habits_Days
}