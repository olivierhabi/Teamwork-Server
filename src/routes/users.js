import express from 'express';
import Users from '../controllers/Users';

const router = express.Router();

router.post('/auth/signup', Users.create);
router.get('/user/:id', Users.getOne);

export default router;
