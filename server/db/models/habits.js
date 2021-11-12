module.exports = (sequelize, DataTypes) => {
    const Habits = sequelize.define("Habits", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },{timestamps: false});


    return Habits;
};