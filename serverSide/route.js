const express = require('express');
const router = express.Router();
const movies =  require('./controller');

router.route('/api').get(movies.movies);
router.route('/api/one_movie/:id').get(movies.getOne);
router.route('/api/create').post(movies.create)
router.route('/api/delete/:id').get(movies.delete)
router.route('/api/update/:id').post(movies.update)

module.exports = router;