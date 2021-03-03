const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });    
});

router.post('/add', (req, res) => {
    burger.createOne(req.body.burger_name, () => {
        res.redirect('/');
    });
});

// PUT request (using POST request as PUT doesn't work in HTML forms)
router.post('/devour/:id', (req, res) => {
    burger.updateOne(req.body.devoured, req.params.id, () => {
        res.redirect('/');
    });
});

router.delete('/devour/:id', (req, res) => {
    burger.deleteOne(req.params.id, () => {
        res.redirect('/');
    });
});

module.exports = router;