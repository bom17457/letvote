/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vote_election', {
    election_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'candidate_join_election',
        key: 'election_id'
      }
    },
    candidate_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'candidate_join_election',
        key: 'user_id'
      }
    },
    voter_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
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
