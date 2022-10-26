import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import listRoutes from './routes/list.js';



const app = express();

app.use('/list', listRoutes);
app.use(bodyParser.json({limit: "20mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}))

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://jaeven:2723@cluster0.elmgakk.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { 
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));


