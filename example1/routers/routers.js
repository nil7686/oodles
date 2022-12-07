routers.post('/adminlogin', async (req, res) => {
	const { username, password } = req.body                

    if (username === process.env.email && password === process.env.password ){
        const token = jwt.sign(             //ek token generate krege or tokken ko id or username sign krege
        {
            id: user._id,
            username: user.username
        },
        JWT_SECRET                 // ek secret key bnani pdti hai or kisi se bhi share nhi krte   const JWT_SECRET  = 'yt6&^ohGYTdgr545432v7%^%#ferfy' or token ko verify bhi secret key se hi kiya jata hai
    )

    return res.json({ status: 'ok', data: token })
    }


	res.json({ status: 'error', error: 'Invalid username/password' })
})
