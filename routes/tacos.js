const express = require('express');
const router = express.Router();
// as in django --> urls.py and views.py
var tacos = require('../controllers/tacosController');

router.get('/tacos', tacos.index);
router.get('/tacos/new', tacos.new);
router.post('/tacos', tacos.create);
router.get('/tacos/:id', tacos.show);
router.get('/tacos/:id/edit', tacos.edit);
router.put('/tacos/:id', tacos.update);
router.delete('/tacos/:id', tacos.destroy);

module.exports = router;