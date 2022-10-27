import student from "../models/student";

export const getStudents = async (req, res)=> {
    try {
        const allStudents = await student.find();


        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createStudents = async (req, res)=> {
    const student = req.body;

    const newStudents = new student(student)

    try {
       await newStudents.save
       res.status(201).json(newStudents)
    } catch (error) {
        res.status(409).json({meessage: error.message});
        
    }
}