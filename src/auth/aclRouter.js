'use strict';

const express = require('express');
const aclRouter = express.Router();

// const User = require('./users-model.js');
const auth = require('./middleware.js');
const Role = require('./roles-model');

const capabilities = {
  admin: ['create', 'read', 'update', 'delete', 'superuser'],
  editor: ['create', 'read', 'update'],
  user: ['read'],
};

// To create roles visit this route once
aclRouter.post('/role', (req, res) => {

  let saves = [];
  Object.keys(capabilities).map(role => {
    let newRecord = new Role({role, capabilities: capabilities[role]});
    // console.log(newRecord.save)
    saves.push(newRecord.save());
  });

  Promise.all(saves);

  res.status(200).send('Roles created');
});

aclRouter.get('/public-stuff', (req, res) => {
  res.status(200).send('Hello from public-stuff');
});

aclRouter.get('/hidden-stuff', auth(), (req, res) => {
  res.status(200).send('Hello from hidden-stuff');
});

aclRouter.get('/something-to-read', auth('read'), (req, res) => {
  res.status(200).send('Hello from something-to-read');
});

aclRouter.post('/create-a-thing', auth('create'), (req, res) => {
  res.status(200).send('Hello from create-a-thing');

});

aclRouter.put('/update', auth('update'), (req, res) => {
  res.status(200).send('Hello from update');

});

aclRouter.patch('/jp', auth('update'), (req, res) => {
  res.status(200).send('Hello from jp');

});

aclRouter.delete('/bye-bye', auth('delete'), (req, res) => {
  res.status(200).send('Hello from bye-bye');

});

aclRouter.get('/everything', auth('superuser'), (req, res) => {
  res.status(200).send('Hello from everything');

});

module.exports = aclRouter;
