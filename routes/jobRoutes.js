import express from 'express';
import { createJob, getJobs, getJobById } from '../controllers/jobController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getJobs); // Public
router.get('/:id', getJobById); // Public
router.post('/', protect, createJob); // Protected

export default router;
