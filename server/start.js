require('dotenv').config()
require('./models/admin')
require('./models/resume')
require('./models/blogs')

const app = require('./app')

const server = app.listen(process.env.PORT, function(err)
{
    if(err) throw err;
    console.log("Express runing on " + server.address().port);
});