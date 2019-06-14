'use strict';

const express = require('express');
const aclRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./middleware.js');

aclRouter.get('/public-stuff', (req, res, next) => {
      res.status(200).send('hello');
});

aclRouter.get('/public-stuff', (req, res, next) => {
});


aclRouter.get('/hidden-stuff', (req, res, next) => {
});

aclRouter.get('/something-to-read', (req, res, next) => {
});

aclRouter.post('/create-a-thing',  (req, res, next) =>  {
});

aclRouter.put('/update',  (req, res, next) =>  {
}); 

aclRouter.patch('/jp',  (req, res, next) =>  {
});

aclRouter.delete('/bye-bye',  (req, res, next) =>  {
});

aclRouter.get('/everything',  (req, res, next) =>  {
});


module.exports = aclRouter;