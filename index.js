require('dotenv').config();
const express = require('express');
// const dbPool = require('./config/database');

const PORT = process.env.PORT || 3000;
const app = express();

const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');
const crudRoutes = require('./routes/crudsampah');

app.use(express.json());
// app.use(crudRoutes);
app.use(crudRoutes);
app.use(middlewareLogRequest);
app.use('/assets', express.static('public/images'))


app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload Berhasil'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
});

// dbPool.getConnection((err, connection) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//     } else {
//         console.log('Connected to the database');
//         connection.release();
//     }
// });
