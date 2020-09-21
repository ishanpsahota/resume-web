const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const salt_f = 7


const db = `mongodb+srv://ishanpsahota:M3raL@wda@cluster0.pyoxn.mongodb.net/resume-web?retryWrites=true&w=majority`

const pass = "N!k@lL@wd3"

require('../../server/models/admin')

const adminS = mongoose.model('admin')

async function connectDB() {

    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    mongoose.connection.on('open', function()
    {
        console.log('Connection established');
    }).on('error', function(err)
    {
        console.log('Connection error: ' + err);
    });

}


function addMember()
{
    bcrypt.genSalt(salt_f, function(err, salt) {
        if(err) console.log(err)
        if(!salt) console.log("salt error")
        if(salt)
        {

            bcrypt.hash(pass, salt, null, function(err, password) {

                if(err) console.log(err)
                if(!password) console.log("no pass")
                else
                {
        
                    var admin = {
        
                        name: 'Ishan',
                        email: 'ishanprasad.sahota@gmail.com',
                        password: password,
                        username: 'ishanprasadsahota',
                        resumeId: null,
                        siteStatus: 'activenow'
                    }
        
                    adminS.create(admin, function(err, done) {
        
                        if(err) console.log(err)
                        if(!done) console.log("ERR")
                        if(done) {
                            console.log(done)                            
                        }
        
                    })
        
                }
        
            })
        }
    })

}

connectDB()
addMember()