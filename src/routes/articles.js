import express from 'express';
import Article from '../controllers/Article';
import ReportArticle from '../controllers/ReportArticle';
import auth from '../middleware/auth';
import admin from '../middleware/admin';

const router = express.Router();

/**Article routes */
router.post('/articles', auth, Article.create);
router.patch('/articles/:id', auth, Article.update);
router.delete('/articles/:id', auth, Article.delete);
router.get('/articles/:id', auth, Article.getOne);
router.get('/articles/tag/:tag', auth, Article.getByTag);
router.get('/articles', auth, Article.getAll);

export default router;
