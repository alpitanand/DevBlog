const {Router} = require('express');
const router = Router();
const {saveUser, registerUser, loginUser} = require('../service/userService');

router.post('/save', saveUser);
router.post('/register', registerUser);
router.post('/login', loginUser)


module.exports = router;
