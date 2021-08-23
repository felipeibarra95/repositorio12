var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

router.get('/', function(req, res, next) {
    res.render('admin/login', {
      layout: 'admin/layout'
    });
  });

  router.post('/', async (req,res, next) => {
    try {
      var usuario = req.body.usuario;
      var password = req.body.password;
      console.log(req.body);

      var data = await usuariosModel.getUserAndPassword(usuario, password);
      if (data != undefined) {
        res.redirect('/admin/novedades');
      } else {
        res.render('admin/login', {
          layout: 'admin/layout',
          error: true
        })
      }

    } catch (error) {
      console.log(error)
    }
  });

  module.exports = router;