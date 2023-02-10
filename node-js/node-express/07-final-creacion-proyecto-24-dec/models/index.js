const User = require( './NoSQL/User' );
const Track = require( './NoSQL/Track' );
const Storage = require( './NoSQL/Storage' );

const models = {
    usersModel: User,
    tracksModel: Track,
    storagesModel: Storage,
};

module.exports = models