import express from 'express';
import Comment from '../controllers/comment';
import auth from '../middleware/auth';
import commentValidate from '../helpers/validators/commentValidator';

const { validate } = commentValidate;

const router = express.Router();

/**Comment routes */
router.post('/articles/:id/comments', auth, validate, Comment.create);
router.get('/comments/:id', auth, Comment.getOne);
router.get('/comments', auth, Comment.getAll);
router.get('/comments/comments/:id', auth, Comment.getSpecific);
router.delete('/comments/:id', auth, Comment.delete);

export default router;
