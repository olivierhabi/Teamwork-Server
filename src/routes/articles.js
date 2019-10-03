import express from 'express';
import Article from '../controllers/article';
import auth from '../middleware/auth';
import ValidateArticle from '../helpers/validators/articleValidator';

const { validate } = ValidateArticle;

const router = express.Router();

/**Article routes */
router.post('/articles', auth, validate, Article.create);
router.patch('/articles/:id', auth, validate, Article.update);
router.delete('/articles/:id', auth, Article.delete);
router.get('/articles/:id', auth, Article.getOne);
router.get('/articles/tag/:tag', auth, Article.getByTag);
router.get('/articles', auth, Article.getAll);

export default router;
