import express from 'express';
import Article from '../controllers/Article';
import auth from '../middleware/auth';

const router = express.Router();

/**Article routes */
router.post('/articles', auth, Article.create);

export default router;
