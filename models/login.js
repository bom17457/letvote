/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('login', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    token: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'login'
  });
};
