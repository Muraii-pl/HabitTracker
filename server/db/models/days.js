const {INTEGER} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Days = sequelize.define("Days", {
        day: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },{timestamps: false});


    return Days;
};
