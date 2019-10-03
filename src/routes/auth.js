import express from 'express';
import Auth from '../controllers/auth';
import validateLogin from '../helpers/validators/loginValidator';

const { validate } = validateLogin;

const router = express.Router();

router.post('/auth/signin/', validate, Auth.getOne);

export default router;
