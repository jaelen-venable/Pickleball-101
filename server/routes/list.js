import express from 'express'
import { getlist } from '../controllers/list.js';

const router = express.Router();

router.get('/', getlist );


export default router;