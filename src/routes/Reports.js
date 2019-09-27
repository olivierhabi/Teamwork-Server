import express from 'express';
import ReportArticle from '../controllers/ReportArticle';
import auth from '../middleware/auth';

const router = express.Router();

/** Report routes */
router.post('/reports/:id/articles', ReportArticle.create);
router.get('/reports/articles', ReportArticle.getAll);

export default router;
