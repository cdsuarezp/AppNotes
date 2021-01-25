const cors = require('cors');
const express = require('express');

const app = express();

app.set('port', 4000);

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));


module.exports = app;
