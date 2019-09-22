import express from 'express';
import Auth from '../controllers/auth';

const router = express.Router();

router.post('/auth/signin/', Auth.getOne);
// router.get('/me', Auth.getOne);

export default router;
