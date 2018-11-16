const db = require('../models');
const path = require("path");
const express = require("express");

module.exports = function (app) {

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

  
//kudos post route
   app.post('/api/kudos', function (req, res) {
        const usersId = req.body.usersId;
        const newEntry = {
          title: req.body.title,
          body: req.body.body
        }
    
        db.kudos.create(newEntry)
          .then(function (kudosData) {
          return users.findOne ({_id: usersId}, { $push: { kudos: kudosData._id } }, { new: true });
        })
        .then(function(usersData) {
          res.json(usersData);
        })
        .catch(function (err) {
          res.json(err);
        });
      });

//kudos get route
 app.get('/api/kudos', function (req, res) {
    db.kudos.find(req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

//kudos update route
  app.put('/api/kudos/:id', function (req, res) {
    db.kudos.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

//kudos delete route
  app.delete('/api/kudos/:id', function (req, res) {
    db.kudos.findOneAndDelete({_id: req.params.id})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

//user get route
  app.get('/api/users', function (req, res) {
    db.users.find({})
    .populate('kudos')
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });


}


// const db = require('../models')

// module.exports = function (app){


// // Retrieves users

//     app.get('/api/users', function(req, res ){
//         User.find(req.body)
//         .then(function (data){
//             res.json(data);
//         })
//         .catch(function (err){
//             res.json(err);
//         })
//     });


// // Retrives kudos

//     app.get('/api/kudos', function (req, res){
//         Kudos.find(req.body)
//         .then(function (data){
//             res.json(data);
//         })
//         .catch(function (err){
//             res.json(err);
//         })
//     })


// // Post Kudos
//     app.post('api/kudos', function(req, res){
//         Kudos.create(req.body)
//         .then(function (data){
//             res.json(data);
//         })
//         .catch(function(err){
//             res.json(err);
//         })
//     });


















// }