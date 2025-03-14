import { getConnection } from '../controllers/friend.controllers.js';
import { verifyUser } from '../middleware/verifyUser.js';
import express from 'express';


const router = express.Router();

router.get('/getConnection', verifyUser, getConnection)




export default router;