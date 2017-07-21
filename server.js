const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const users = require('./usersCtrl.js');

app.use(bodyParser.json());

app.get('/api/users', users.getUsers);
app.get('/api/users/:id', users.getUsersById);

app.get('/api/admins', users.getAdmins);
app.get('/api/nonadmins', users.getNonAdmins);
app.get('/api/user_type', users.getUsersByType);

app.put('/api/users/:id', users.updateUser);
app.post('/api/users', users.postUser);
app.delete('/api/users/:id', users.deleteUser);

app.listen(port, console.log('Listening on port #' + port));