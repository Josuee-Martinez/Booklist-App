module.exports = function (sequelize, DataTypes){
    return sequelize.define('book', {
        isbn: DataTypes.STRING,
        author: DataTypes.STRING,
        book: DataTypes.STRING,
        owner: DataTypes.INTEGER
    })
}