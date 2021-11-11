// module.exports = (sequelize, DataTypes) => {
//     const Tracker_Habits= sequelize.define("Tracker_Habits",{},{timestamps:false})
//
//     Tracker.belongsToMany(Habits,{through:Tracker_Habits})
//     Habits.belongsToMany(Tracker,{through:Tracker_Habits})
//
//     return Tracker_Habits
// }