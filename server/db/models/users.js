module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photourl: DataTypes.STRING
    });

    Users.associate = (models) => {
        Users.hasMany(models.Habits, {
            onDelete: "cascade"
        })
    }
    return Users;
};