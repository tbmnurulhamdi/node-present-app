const { request } = require('express');
const { Sequelize, Op } = require('sequelize');
const model = require("../models/index"); // pemamnggilan model index
const user = model.user; // pemamnggilan model.user
const controller = {}; // inisialisasi

// memulai ambil semua data user dari table user dengan nama function getUser (bisa bebas)
controller.getUser = async function(req, res) { // req = request, res = respons

    // mengambil query untuk datatables https://datatables.net/manual/server-side
    // if (typeof req.query.order === undefined) {
    //     let column_name = 'fullname';
    //     let column_sort_order = 'DESC';
    // } else {
    //     // let column_index = req.query.order[0]['column'];
    //     // let column_name = req.query.columns[column_index]['data'];
    //     // let column_sort_order = req.query.order[0]['dir'];
    // }

    // let search = req.query.search['value'];
    // let limits = req.query.start;
    // let offsets = req.query.length


    // mulai mencoba transaksi mengambil data semua user  
    // https://sequelize.org/docs/v6/other-topics/transactions/
    try {
        // const recordTotal = await user.count(); // SELECT COUNT(*) FROM user;
        // console.log(recordTotal.count);

        // const recordFiltered = await user.count({
        //     where: {
        //         [Op.or]: [
        //             {
        //                 fullname: {
        //                     [Op.substring]: search
        //                 }
        //             },
        //             {
        //                 position: {
        //                     [Op.substring]: search
        //                 }
        //             },
        //             {
        //                 phone: {
        //                     [Op.substring]: search
        //                 }
        //             }
        //         ]
        //     }
        // }); // SELECT COUNT(*) FROM user WHERE fullname LIKE "" OR position LIKE "" OR phone LIKE "";
        // console.log(recordFiltered.count);

        const results = await user.findAll(); // SELECT * FROM user WHERE fullname LIKE "" OR position LIKE "" OR phone LIKE "" ORDER BY column_name, DESC/ASC LIMIT limits, offsets;

        if (results.length > 0) { // jika data user lebih dari 0 atau ada
            res.status(200).json({
                message : "data ditemukan",
                // draw : req.query.draw,
                // recordTotal : recordTotal,
                // recordFiltered : recordFiltered,
                data : results
            });
        } else {
            res.status(201).json({
                message : "data kosong",
                data : []
            });
        }
    }
    // gagal mendapatkan data semua user (error)
    catch {
        res.status(404).json({
            message : "gagal"
        })
    }
}

module.exports = controller;