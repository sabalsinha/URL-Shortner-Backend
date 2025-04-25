import express from 'express';
import { createUrl, redirectUrl } from '../controller/url.Controller.js';

const router = express.Router();


router.post('/shorten', createUrl);
router.post('/:shortid', redirectUrl);

export default router;

