import mongoose, { Schema } from 'mongoose';

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    location: String,
    fee: {
        type: String,
        deafult: '0'
    },
   

});

const student = mongoose.model('student', studentSchema);

export default student;