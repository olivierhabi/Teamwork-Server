import express from 'express';
import Auth from '../controllers/Auth';

const router = express.Router();

router.post('/auth/signup', Auth.create);

export default router;
