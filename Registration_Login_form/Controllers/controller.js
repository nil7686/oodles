const pool = require("/home/nilesh/Desktop/HATRIK/Registration_Login_form/database/db.js")


const Login = (req,res) => {
    
pool.query("Select * FROM users",(error,results)=>{
    if(error) throw error;
    res.status(200).json(results.rows);
})
};

const Registration = async(req,res) => {
    const {name, email} = req.body;
        try {
        const  data  =  await pool.query(`SELECT * FROM users WHERE email= $1;`, [email]); //Checking if user already exists
        const  arr  =  data.rows;
        if (arr.length  !=  0) {
        return  res.status(400).json({
        error: "Email already there, No need to register again.",
        });
        }

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`User added with ID: `)
    })
}
catch (err) {
    console.log(err);
}
}


module.exports = {
    Registration,
    Login
}