import express from 'express';
import Reflection from '../Controllers/Reflection';

const router = express.Router();

//
router.post('/reflections', Reflection.create);
router.get('/reflections', Reflection.getAll);
router.get('/reflections/:id', Reflection.getOne);
router.put('/reflections/:id', Reflection.update);
router.delete('/reflections/:id', Reflection.delete);

export default router;
