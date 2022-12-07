const pool = require("./db")


const getStudents = (req,res) => {
pool.query("Select * FROM users",(error,results)=>{
    if(error) throw error;
    res.status(200).json(results.rows);
})
};

const addStudents = (req,res) => {
    const {name, email} = req.body;

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`User added with ID: `)
    })
}

module.exports = {
    getStudents,
    addStudents
}