import express from 'express';
import ReportArticle from '../controllers/ReportArticle';
import ReportComment from '../controllers/ReportComment';
import auth from '../middleware/auth';
import admin from '../middleware/admin';

const router = express.Router();

/** Report routes */
router.post('/reports/:id/articles', [auth, admin], ReportArticle.create);
router.get('/reports/articles', [auth, admin], ReportArticle.getAll);
router.post('/reports/:id/comments', [auth, admin], ReportComment.create);
router.get('/reports/comments', [auth, admin], ReportComment.getAll);

export default router;
