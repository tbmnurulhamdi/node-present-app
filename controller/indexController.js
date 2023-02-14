/*
IndexController digunakan untuk menampung seluruh controller yang ada di app
ini memungkinkan penyederhanaan kode di sisi touter
setiap ada controller baru harus ditambahkan dan di inisialisasi disini
*/


module.exports = {
    'adminController' : require('./adminController'),
    'userController' : require('./userController')
};
