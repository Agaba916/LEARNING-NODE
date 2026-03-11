const students=['Agaba','Happy','Jean','Eudes'];

const getStudents=(req,res)=>{
    res.json(students);
};

module.exports ={
    getStudents
};