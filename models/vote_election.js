/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vote_election', {
    election_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    candidate_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    voter_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    create_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'vote_election'
  });
};
