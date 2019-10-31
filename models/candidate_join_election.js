/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('candidate_join_election', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    election_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'elections',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM('enable','disable'),
      allowNull: false,
      defaultValue: 'enable'
    }
  }, {
    tableName: 'candidate_join_election'
  });
};
