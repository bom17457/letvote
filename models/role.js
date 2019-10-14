/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'role'
  });
};
