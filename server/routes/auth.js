 import express from 'express'
 import {login, register, secret} from '../controllers/auth.js'
import { isAdmin, requiresign } from '../middlewares/auth.js'
  
 const router = express.Router()

 router.post('/register', register )
 router.post("/login", login)
 router.get ("/auth-check", requiresign, (req, res) => {
    res.json({ok: true})
 })
 router.get ("/admin-check", requiresign, isAdmin, (req, res) => {
   res.json({ok: true})
})

//testing

router.get('/secret', requiresign, isAdmin, secret )






 export default router;