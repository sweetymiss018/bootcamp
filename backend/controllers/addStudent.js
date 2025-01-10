const { studentSchema } = require("../model/student.model");

module.exports.addStudent = async(req,res)=>{
    try {
        
        const {name,email,phone} = req.body;


        if(!name || !email || !phone) return res.status(400).json({message:"Name and email and phone are required"})

            const student = await new studentSchema({
                ...req.body
            })

          await student.save();

          return res.status(201).json({message:"User Register successfully!"})

    } catch (error) {
        return res.status(500).json({
            message:"Server error"
        })
    }
}

module.exports.getStudent = async(req,res)=>{
    try {
        
        const students = await studentSchema.find();


        return res.status(201).json({message:"All students",
            data:students
        })

    } catch (error) {
        return res.status(500).json({message:error})
    }
}