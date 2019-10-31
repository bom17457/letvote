/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elections', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    displaytext: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    start_register_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_register_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_vote_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_vote_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('active','inactive'),
      allowNull: false,
      defaultValue: 'active'
    },
    create_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'elections'
  });
};
