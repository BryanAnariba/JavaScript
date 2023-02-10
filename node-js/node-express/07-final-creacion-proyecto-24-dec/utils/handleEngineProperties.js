const enginneDB = process.env.ENGINNE_DB;

const getProperties = () => {
    const data = {
        nosql: {
            id: '_id'
        },
        mysql: {
            id: 'id'
        }
    }
    return data[enginneDB];
};

module.exports = getProperties;