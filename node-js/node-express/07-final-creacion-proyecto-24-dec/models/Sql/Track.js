const { sequelize } = require( '../../config/MySQL' );
const { DataTypes } = require( 'sequelize' );

const Track = sequelize.define(
    'Track',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        album: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cover: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist_nickName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist_nationality: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist_start: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        artist_end: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        mediaId: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = Track;