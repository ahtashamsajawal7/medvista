
import express from 'express';
import { saveContact } from '../controllers/contactController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();
router.post('/submit', saveContact);
export default router;
