const express = require('express');
const { success, error } = require('../xutils/apiResponse');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json(
        success("🎉I'm alive", {
        },200)
    )
});




module.exports = router;