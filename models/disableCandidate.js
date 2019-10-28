/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('disableCandidate', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    election_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    candidate_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'disableCandidate'
  });
};
