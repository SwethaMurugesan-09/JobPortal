import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
// import './config/instrument.js'
import * as Sentry from "@sentry/node";
// import { clerkWebhooks } from './controller/webhooks.js'
// import companyRoutes from './routes/companyRoutes.js'
// import connectCloudinary from './config/cloudinary.js'
// import jobRoutes from './routes/JobRoutes.js'
// import userRoutes from './routes/UserRoutes.js'


const app=express()


await connectDB()
// await connectCloudinary()

app.use(cors());

//whenever we get the response then the response will be passed using json method
app.use(express.json())

app.get('/',(req,res)=>res.send("Api working"))
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
  

//   app.post('/webhooks', (req, res) => {
//     console.log("Received webhook:", req.body);
//     res.status(200).send("Webhook received");
// });

// app.use('/api/company',companyRoutes)
// app.use('/api/jobs',jobRoutes)
// app.use('/api/users',userRoutes)

const PORT=process.env.PORT || 5000
Sentry.setupExpressErrorHandler(app);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})