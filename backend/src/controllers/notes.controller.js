const notesCtrl = {}

notesCtrl.getNotes= ((req, res) => res.send('GET - Notes Routes'));

notesCtrl.postNotes= ((req, res) => res.send('post - Notes Routes'));

notesCtrl.putNotes= ((req, res) => res.json({
    message: 'Note Update'
}))

notesCtrl.deleteNotes= ((req, res) => res.json({
    message: 'Note deleted'
}))

notesCtrl.getNoteById= ((req, res) => res.json({
    message: 'Note'
}))


module.exports =notesCtrl;