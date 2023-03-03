const express = require("express");
const { route } = require("./login");

const router = express.Router();
router.use(express.json());

router.post('/logout', (req, res) => {
    res.cookie('token', "").json('ok');
})

module.exports = router;
