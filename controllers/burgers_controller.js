const express = require('express');
const { selectAll, insertOne, updateOne } = require('../models/burger');

const router = (app) => {
    app.get('/burgers', (req, res) => {
        
    })
}

module.exports = router;