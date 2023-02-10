const { sequelize } = require( '../../config/MySQL' );
const { DataTypes } = require( 'sequelize' );

const Storage = sequelize.define(
    'Storage',
    {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fileName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true,
    }
);

module.exports = Storage;