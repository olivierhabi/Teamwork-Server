import express from 'express';
import Comment from '../controllers/comment';
import auth from '../middleware/auth';
import commentValidate from '../helpers/validators/commentValidator';

const { validate } = commentValidate;

const router = express.Router();

/**Comment routes */
router.post('/articles/:id/comments', auth, validate, Comment.create);

export default router;
