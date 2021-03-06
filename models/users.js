/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    fname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'role',
        key: 'role'
      }
    },
    status: {
      type: DataTypes.ENUM('enable','disable'),
      allowNull: false,
      defaultValue: 'enable'
    },
    create_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'users'
  });
};
