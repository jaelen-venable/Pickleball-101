import mongoose, { Schema } from 'mongoose';

const studentSchema = mongoose.Schema({
    registrationNumber: Number,
    name: String,
    grade: String,
    section: {
        type: String,
        deafult: '0'
    },
    subjects: [String]

});

const student = mongoose.model('student', studentSchema);

export default student;