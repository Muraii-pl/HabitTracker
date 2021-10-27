module.exports = (sequelize,DataTypes) => {
    const Users = sequelize.define("Users",{
        id:{
            primaryKey:true,
            type:DataTypes.UUID,
            defaultValue:sequelize.UUIDV4
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:true
        },
        photourl:{
            type:DataTypes.STRING,
            allowNull:true
        }
    })

    return Users
}