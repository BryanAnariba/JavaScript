const multer = require( 'multer' );
const { storage } = require( '../utils/storage.handle' );

const uploadMiddleware = multer({
    storage: storage
});

module.exports = {
    uploadMiddleware,
}