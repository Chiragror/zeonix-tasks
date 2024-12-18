const express = require("express")
const router = express.Router()

const {userRegister , logIn} = require("../controller/user");

router.post('/userRegister',userRegister);

router.get('/login',logIn)

module.exports = router;