import express from 'express'
import { getlist, createlist } from '../controllers/list.js';
import list from '../models/list.js';

const router = express.Router();

router.get('/', getlist );
router.post('/', createlist );




export default router;