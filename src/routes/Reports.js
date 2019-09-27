import express from 'express';
import ReportArticle from '../controllers/ReportArticle';
import ReportComment from '../controllers/ReportComment';
import auth from '../middleware/auth';

const router = express.Router();

/** Report routes */
router.post('/reports/:id/articles', ReportArticle.create);
router.get('/reports/articles', ReportArticle.getAll);
router.post('/reports/:id/comments', ReportComment.create);
router.get('/reports/comments', ReportComment.getAll);

export default router;
