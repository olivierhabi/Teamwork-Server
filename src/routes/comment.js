import express from 'express';
import Comment from '../controllers/Comment';
import auth from '../middleware/auth';

const router = express.Router();

/**Comment routes */
router.post('/articles/:id/comments', auth, Comment.create);

export default router;
