import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { Error } from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';



const app = express();

app.use('/student', studentRoutes);
app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://jaeven:cunt@cluster0.3g57wky.mongodb.net/test';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () => 
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((Error) => console.log(Error.message));






