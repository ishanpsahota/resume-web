const Admin = require('../models/admin')

exports.registerAdmin = async function(req, res) {

    try {
        const admin = new Admin({
           name: req.body.name,
           email: req.body.email,           
           password: req.body.password,
           username: req.body.username,
           siteStatus: 'activeNow'
         });

        console.log(admin)
        let data = await admin.save();
        const token = await admin.generateAuthToken(); // here it is calling the method that we created in the model
        res.status(201).json({ data, token });
        
    } 
    catch (err) {
        res.status(400).json({ err: err });
    }

}

exports.loginAdmin = async function(req, res) {

    if(!req.body.email || !req.body.password) return res.status(400).json({err: 'Missing Parameters'})

    // console.log(req.body)

    try {
        
        console.log('h')
        const email = req.body.email;
        const password = req.body.password; 
    
        const admin = await Admin.findByCredentials(email, password);         
        if (!admin) {            
            return res.status(401).json({ error: "Login failed! Check authentication credentials" });
        }

        const token = await admin.generateAuthToken();
        res.status(201).json({ token });
    } 
    catch (err) {
        console.log('eh')
        console.log(err)
        res.status(400).json({ error: err });
    }
    
}

exports.getInfo = async function(req, res) {

    await res.json(req.userData);

}

exports.getStatus = async function(req, res) {

    try 
    {
        const admin = Admin.findOne()

        if(!admin) return res.statuss(404).json({err: 'Admin Not Found!'})
        
        return res.status(200).json({state: (await admin).toJSON().siteStatus})
    }
    catch(err)
    {
        return res.status(401).json({err: err})
    }

}