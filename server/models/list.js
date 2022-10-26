import mongoose from 'mongoose';

const listSchema = mongoose.Schema({
    registrationNumber: Number,
    name: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    },
    subjects:[String]
});

const list = mongoose.mode1('list', listSchema);
export default list;