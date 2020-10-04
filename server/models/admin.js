const mongoose = require('mongoose')

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')

const adminSchema = new mongoose.Schema({

    name: {
        type: String
    },

    email: {
        type: String,
        trim: true
    },

    password: {
        type: String
    },

    username: {
        type: String
    },

    resumeId: {
        type: mongoose.Types.ObjectId
    },

    siteStatus: {
        type: String,
        required: true
    },

    tokens: [{
      token: {
        type: String,
        required: true
      }
    }]

})

adminSchema.methods.generateAuthToken = async function() {
    const admin = this;
    const token = jwt.sign({ 
        _id: admin._id, 
        name: admin.name, 
        email: admin.email, 
        whoami: 'adminHere' },
      "secret");

    admin.tokens = admin.tokens.concat({ token });

    await admin.save();

    return token;
};
  

adminSchema.statics.findByCredentials = async (email, password) => {
        
    const admin = await Admin.findOne({ email });
    
    if (!admin) {
        throw new Error({ error: "Invalid login details" });
    }
  
    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    
    if (!isPasswordMatch) {
        throw new Error({ error: "Invalid login details" });
    }
    
    return admin;

    // Admin.findOne({username}).exec(function(err, adminFound) {

    //     if(err) 
    //     {
    //         console.log(err)
    //         return new Error('Unknown Error')
    //     }

    //     if(!adminFound)
    //     {
    //         console.log('admin not found')
    //         return new Error('404')
    //     }

    //     if(adminFound)
    //     {
    //         const passwordMatch = bcrypt.compare(password, adminFound.password)

    //         if(!passwordMatch)
    //         {
    //             console.log('pass incorrect')
    //             return new Error('incorrect pass')
    //         }
    //         else return adminFound
    //     }

    // })
};

adminSchema.pre("save", async function(next) {
    
    const admin = this;
    
    if (admin.isModified("password")) {
        admin.password = await bcrypt.hash(admin.password, 8);
    }
    
    next();
  });


const Admin = mongoose.model('admin', adminSchema)

module.exports = Admin

