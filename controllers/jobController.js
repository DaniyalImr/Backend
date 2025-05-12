import Job from '../models/Job.js';

// Create Job
export const createJob = async (req, res) => {
  const { title, company, location, description, salary } = req.body;

  try {
    const job = await Job.create({
      title,
      company,
      location,
      description,
      salary,
      createdBy: req.user._id,
    });

    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create job' });
  }
};

// Get All Jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
};

// Get Single Job
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching job' });
  }
};
