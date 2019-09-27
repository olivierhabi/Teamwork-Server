import express from 'express';
import Article from '../controllers/Article';
import auth from '../middleware/auth';

const router = express.Router();

/**Article routes */
router.post('/articles', auth, Article.create);
router.patch('/articles/:id', auth, Article.update);
router.delete('/articles/:id', auth, Article.delete);
router.get('/articles/:id', auth, Article.getOne);
router.get('/articles/tag/:tag', Article.getByTag);
router.get('/articles', Article.getAll);

export default router;
