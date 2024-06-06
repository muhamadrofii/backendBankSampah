const dbPool = require('../config/database');

const getAllCrud = () => {
    const SQLQuery = 'SELECT * FROM crudsampah';
    return dbPool.execute(SQLQuery);
}

const createSampah = (body) => {
    const SQLQuery = `INSERT INTO crudsampah (nama, alamat, jenis_sampah, berak_kg)
    VALUES (?, ?, ?, ?)`;
    return dbPool.execute(SQLQuery, [body.nama, body.alamat, body.jenis_sampah, body.berak_kg]);
}


module.exports = {getAllCrud, createSampah};