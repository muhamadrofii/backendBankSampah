const CrudModel = require('../models/crudsampah');

const getAllCrud = async (req, res) => {
    try {
        const [data] = await CrudModel.getAllCrud();

        res.json({
            message: 'GET data sukses',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createSampah = async (req, res) => {
    const { body } = req;

    // if (!body.nama || !body.alamat || !body.jenis_sampah || !body.berat_kg) {
    //     return res.status(400).json({
    //         message: 'Anda Mengirimkan Data Yang Salah',
    //         data: null,
    //     });
    // }

    console.log('Data yang diterima:', body);

    if (
        typeof body.nama !== 'string' ||
        typeof body.alamat !== 'string' ||
        typeof body.jenis_sampah !== 'string' ||
        typeof body.berak_kg !== 'number'
    ) {
        return res.status(400).json({
            message: 'Anda Mengirimkan Data Yang Salah',
            data: null,
        });
    }


    try {
        await CrudModel.createSampah(body);
        res.status(201).json({
            message: 'CREATE New Sampah Sukses',
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

module.exports = {getAllCrud, createSampah}