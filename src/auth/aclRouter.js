'use strict';

const express = require('express');
const aclRouter = express.Router();

// const User = require('./users-model.js');
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


module.exports = aclRouter;
