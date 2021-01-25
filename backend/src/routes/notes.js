const { Router } = require('express');
const router = Router();
const {getNotes, postNotes, putNotes, deleteNotes, getNoteById} = require('../controllers/notes.controller')

router.route('/')
    .get(getNotes)
    .post(postNotes);

router.route('/:id')
    .delete(deleteNotes)
    .put(putNotes)
    .get(getNoteById);


module.exports = router;