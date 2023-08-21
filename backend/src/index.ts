import express from 'express';
import session from 'express-session';
const path = require('path');

const router = express();
const port = 1111;

router.use(express.static(path.join(__dirname, '../../frontend/dist')));

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

router.listen(port, () => {
  console.log(`[BACKEND] Listening on port ${port}`);
});