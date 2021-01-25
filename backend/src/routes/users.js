
const { Router } = require('express');
const router = Router();
const {getUsers, postUsers, putUsers, deleteUsers, getUsersById} = require('../controllers/users.controller')

router.route('/')
    .get(getUsers)
    .post(postUsers);

router.route('/:id')
    .delete(deleteUsers)
    


module.exports = router;