




const createEmployee = (req, res) => {
    const { name, email } = req.body;
  
    query(
      "INSERT INTO users (name,email) VALUES ($1,$2) RETURNING * ",
      [name, email],
      (err, result) => {
        if (err) {
          console.log(err);
          throw err;
        }
  
        res.status(200).json({
          msg: "data created succeffully",
          data: result.rows[0],
        });
      }
    );
  };

  export default {
    createEmployee

}