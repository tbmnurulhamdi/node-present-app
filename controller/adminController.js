const { request } = require('express');
const { Sequelice, model} = require("sequelize");
const db = require('../models');
// const db = require('../models/index');
const controller = {};

controller.getUser = async function(req, res) {
    try {
        await db.Sequelize.user.findAll()
        .them (result => {
            if (result.length > 0) {
                res.status(200).json({
                    message : "data user",
                    data : result
                })
            } else {
                res.status(201).json({
                    message : "data kosong",
                    data : []
                })
            }
        }) 
    }
    catch {
        res.status(404).json({
            message : Error
        })
    }
}

module.exports = controller;