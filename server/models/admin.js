const mongoose = require('mongoose')

const bcrypt = require('bcrypt-nodejs');

const SALT_WORK_FACTOR = 7;

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
    }

})

adminSchema.statics.authenticate = function (email, password, callback) {
    var admin = this;    

    admin.findOne({ 'email': email })
      .exec(function (err, admin) {
        if (err) {          
          return callback(err)
        } else if (!admin) {
          var err = new Error('admin not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, admin.password, function (err, result) {
          if (result === true) {
            return callback(null, admin);
          } else {
            return callback(err);
          }
        })
      });
  }

adminSchema.pre('save', function(next){
    var admin = this;

    if(!admin.isModified('password'))
        return next();
    
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt)
    {
        if(err) return next(err);
            
        bcrypt.hash(admin.password, salt, null, function(err, hash)
        {
            if(err) return next(err);

            admin.password = hash;
            next();
        });
    });

    next();
});



module.exports = mongoose.model('admin', adminSchema)

