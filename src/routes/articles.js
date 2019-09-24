import express from 'express';
import Article from '../controllers/Article';
import auth from '../middleware/auth';

const router = express.Router();

/**Article routes */
router.post('/articles', auth, Article.create);
router.patch('/articles/:id', auth, Article.update);
router.delete('/articles/:id', Article.delete);

export default router;
