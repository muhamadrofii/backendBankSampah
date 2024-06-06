// const { path } = require("../routes/crudsampah")

const logRequest = (req, res, next) => {
    console.log('Terjadi Kesalahan ke PATH: ', req.path);
    next();
}

module.exports = logRequest;