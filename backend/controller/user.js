const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const _ = require('lodash');
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
module.exports = router;


exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash
    });
            user.save()
                .then(() => res.status(201).json({
                  message: 'User created !',
                  status: 201
                }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'User not found !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Wrong password !' });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET'
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

exports.profile = (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(500).json({ error }));
};
router.get('/', (req, res) => {
  User.find((err, docs) => {
      if (!err) { res.send(docs); }
      else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
  });
});


router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  User.findById(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.post('/', (req, res) => {
  var u = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      role:req.body.role,
      
  });
  u.save((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in user Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  var u = {
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      role:req.body.role,
  };
  User.findByIdAndUpdate(req.params.id, { $set: u }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

      User.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
  });
});
