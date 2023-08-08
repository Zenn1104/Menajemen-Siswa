
require('../config/db.js');
const students = require ('../model/studentsModel.js');

const readStudent = async(req, res) => {   
    const student = await students.find();
    res.render('index', {
        layout: 'layouts/main-layout',
        title: 'Halaman Dashboard Kelas SMK',
        student : student,
    })
};


 const createStudent = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.render('add-student', {
            tittle : 'From Tambah data siswa',
            layout : 'layouts/main-layouts',
            errors : errors.array()
        });
    }else{
      await students.insertMany(req.body, (error, result) => {
            
        });
    }  
};


 const readDetailStudent = async (req,res) => {
    const student =  await students.findOne({nisn : req.params.nisn});
    res.render('detail', {
        layout: 'layouts/main-layout',
        student,
        title: 'Halaman Detail Data Siswa SMK',
    });
}

module.exports = {readStudent,createStudent,readDetailStudent};