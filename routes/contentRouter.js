const express = require('express');

const router = express.Router();

const content = require('../controllers/contentController.js');

router.post('/new', content.newContent);

router.get('/', content.findAllContent);

router.get('/:contentId', content.findOneContent);

router.put('/update', content.updateContent);

router.delete('/delete/:id', content.deleteContent);

module.exports = router;
