const { DataTypes } = require( 'sequelize' );
const { sequelize } = require( '../../config/MySQL' );

const User = sequelize.define(
    "User",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM([ 'USER', 'ADMIN' ]),
        }
    },
    {
        timestamps: true,
    }
);

module.exports = User;
