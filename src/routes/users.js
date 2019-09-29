import express from 'express';
import Users from '../controllers/Users';
import auth from '../middleware/auth';
import admin from '../middleware/admin';

const router = express.Router();

router.post('/auth/signup', Users.create);
router.get('/users', [auth, admin], Users.getAll);
router.get('/me', auth, Users.getMe);

export default router;
