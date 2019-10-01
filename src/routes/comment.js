import express from 'express';
import Comment from '../controllers/comment';
import auth from '../middleware/auth';

const router = express.Router();

/**Comment routes */
router.post('/articles/:id/comments', auth, Comment.create);
router.get('/comments/:id', auth, Comment.getOne);
router.get('/comments', auth, Comment.getAll);
router.get('/comments/comments/:id', auth, Comment.getSpecific);
router.delete('/comments/:id', auth, Comment.delete);

export default router;
