const express = require('express');

const router = express.Router();

const content = require('../controllers/contentController.js');

router.post('/new', content.newContent);

router.get('/list', content.findAllContent);

router.get('/:contentId', content.findOneContent);

router.put('/:contentId/update', content.updateContent);

router.delete('/:contentId/delete', content.deleteContent);

module.exports = router;
