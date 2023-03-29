import axios from 'axios';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const response = await axios('https://http.cat/200');
  res.json(response.data);
});

export default router;
