
var url = `http://localhost:8081`

var urls = {
    url: url,
    'addadmin': url + '/addadmin',
    'getBlogs': url + '/getblogs',
    'getBlog': url + '/getblog',
    'getSelf': url + '/getself',
    'shutdown': url + '/togglestate',
    'search': url + '/search'
}

export default {

    getUrl() {

        return urls

    }

}