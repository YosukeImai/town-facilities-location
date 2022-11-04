'use strict';
const express = require('express');
const router = express.Router();

let facilities = [
    {id: '1', name: 'name1'},
    {id: '2', name: 'name2'}
]

router.route('/')
    .get((req, res)=> {

        res.json(facilities);
    })
    .post((req, res) => {
        //
    })

module.exports = router;