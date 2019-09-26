import express from 'express';
import Comment from '../controllers/Comment';
import auth from '../middleware/auth';

const router = express.Router();

/**Comment routes */
router.post('/articles/:id/comments', auth, Comment.create);
router.get('/comments/:id', Comment.getOne);
router.get('/comments', Comment.getAll);
router.get('/comments/comments/:id', Comment.getSpecific);

export default router;
