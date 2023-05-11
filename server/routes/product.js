import express from 'express'
import formidable from 'express-formidable'
import { create, list, photo, read, remove, update } from '../controllers/product.js';
import { isAdmin, requiresign } from '../middlewares/auth.js'

const router = express.Router();


router.post('/product', requiresign, isAdmin, formidable(), create)
 router.put('/product/:productId', requiresign, isAdmin,formidable(), update)
 router.delete('/product/:productId', requiresign, isAdmin, remove )
 router.get('/products',  list);
 router.get('/products/:slug', read )
 router.get('/product/photo/:productId', photo)


export default router  