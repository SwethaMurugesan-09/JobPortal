// import express from 'express'
// import { changeJobApllicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controller/companyController.js'
// import upload from '../config/multer.js'
// import { protectCompany } from '../middleware/authMiddleware.js'

// const router =express.Router()

// router.post('/register',upload.single('image') ,registerCompany)

// router.post('/login',loginCompany)

// // here all the routes are protected using  this protectCompany 
// router.get('/company',protectCompany ,getCompanyData)

// router.post('/post-job',protectCompany, postJob)

// router.get('/applicants',protectCompany,getCompanyJobApplicants)

// router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

// router.post('/change-status',protectCompany,changeJobApllicationsStatus)

// router.post('/change-visibility',protectCompany,changeVisibility)

// export default router
