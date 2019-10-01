import express from 'express';
import ReportArticle from '../controllers/reportArticle';
import ReportComment from '../controllers/reportComment';
import Article from '../controllers/article';
import auth from '../middleware/auth';
import admin from '../middleware/admin';

const router = express.Router();

/** Report routes */
router.post('/reports/:id/articles', auth, ReportArticle.create);
router.get('/reports/articles', [auth, admin], ReportArticle.getAll);
router.post('/reports/:id/comments', auth, ReportComment.create);
router.get('/reports/comments', [auth, admin], ReportComment.getAll);

//get reported article and delete
router.get('/reports/articles/:id', ReportArticle.getOne);
router.delete('/reports/articles/:id', ReportArticle.delete);

//get reported comment and delete
router.get('/reports/comments/:id', ReportComment.getOne);
router.delete('/reports/comments/:id', ReportComment.delete);

export default router;
