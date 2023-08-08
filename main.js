const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const {body, validationResult, check} = require('express-validator');
const { readStudent,createStudent, readDetailStudent} = require('./controllers/studentsController.js');

const cekDouble = require('./utils/cekDouble.js');

require('./config/db.js');
const students = require('./model/studentsModel.js'); 

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressEjsLayouts);

app.get('/student', readStudent);

app.get('/student/add', (req, res) => {
    res.render('add-student', {
        tittle : 'Form Tambah data siswa',
        layout : 'layouts/main-layouts'
    });
});

app.post('/student', [
    body('nama').custom(cekDouble),
    check('email', 'email tidak valid!').isEmail(),
    check('phone', 'No telepon tidak valid!').isMobilePhone('id-ID'),
],createStudent);


app.get('/about', (req,res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About Kelas SMK',
    });
});

app.get('/student/:nisn',readDetailStudent);



app.listen(port, () => {
    console.log(`example application running on port ${port}`);
});