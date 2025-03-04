import { updatePicture } from '../controllers/profile.controllers.js';
import { verifyUser } from '../middleware/verifyUser';
import express from 'express';

const router = express.Router();


router.put('/updateDisplayPicture', verifyUser, updatePicture)


export default router;