const UsersCtrl = {}

UsersCtrl.getUsers= ((req, res) => res.send('GET - Users Routes'));

UsersCtrl.postUsers= ((req, res) => res.send('post - Users Routes'));

UsersCtrl.deleteUsers= ((req, res) => res.json({ message: 'Users deleted'}));




module.exports =UsersCtrl;