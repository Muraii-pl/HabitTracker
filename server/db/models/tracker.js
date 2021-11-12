module.exports = (sequelize, DataTypes) => {
    const Tracker = sequelize.define("Tracker", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        month: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {timestamps: false})
    return Tracker
}