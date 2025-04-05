import express from 'express';
import { google, signin, signOut, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup",signup)
router.post("/signin",signin)
router.post('/google',google)
<<<<<<< HEAD
router.get('/signout', signOut)
=======
>>>>>>> 3caa0878a05f3d547f38ae53383353bb751077a8

export default router;