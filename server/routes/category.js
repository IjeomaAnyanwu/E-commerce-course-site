import express from 'express'
import { secret } from '../controllers/auth.js';
import { create, update, remove,  list, read } from '../controllers/category.js';
import { isAdmin, requiresign } from '../middlewares/auth.js'

const router = express.Router();


router.post('/category', requiresign, isAdmin, create)
router.put('/category/:categoryId', requiresign, isAdmin, update)
router.delete('/category/:categoryId', requiresign, isAdmin, remove )
router.get('/categories',  list);
router.get('/category/:slug', read )


export default router  