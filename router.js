const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/standard', (req, res) => {
  res.render('standard');
});

router.get('/abjad', (req, res) => {
  res.render('abjad');
});

router.get('/translasi', (req, res) => {
  res.render('translasi');
});

router.get('/sixkey', (req, res) => {
  res.render('skeypage');
});

module.exports = router;
