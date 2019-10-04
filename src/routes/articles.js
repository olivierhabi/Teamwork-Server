import express from 'express';
import Article from '../controllers/article';
import auth from '../middleware/auth';
import {
  validateArticle,
  validateId
} from '../helpers/validators/articleValidator';
// import uuidValidate from '../helpers/validators/uuidValidate';
// import validateTag from '../helpers/validators/validateTag';

const { validate } = validateArticle;

const { validateUuid } = validateId;

const router = express.Router();

/**Article routes */
router.post('/articles', auth, validate, Article.create);
router.patch('/articles/:id', auth, validate, Article.update);
router.delete('/articles/:id', auth, Article.delete);
router.get('/articles/:id', auth, Article.getOne);
router.get('/articles/tag/:tag', auth, Article.getByTag);
router.get('/feeds', auth, Article.getAll);

export default router;
