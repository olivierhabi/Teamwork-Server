import express from 'express';
import Users from '../controllers/Users';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/auth/signup', Users.create);
router.get('/user/:id', Users.getOne);
router.get('/me', auth, Users.getMe);

export default router;
