/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vote_election', {
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
    candidate_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    voter_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    create_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'vote_election'
  });
};
