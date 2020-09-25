import axios from 'axios'



var url = `http://localhost:8081`
// var url = `https://ishanpsahota.herokuapp.com`

var urls = {
    url: url,
    'addmasternow': url + '/addmasternow',
    'getBlogs': url + '/getblogs',
    'getBlog': url + '/getblog/',
    'getSelf': url + '/getself',
    'shutdown': url + '/togglestate',
    'search': url + '/search',
    'getState': url + '/getstate',
    'createBlog': url + '/create',    
    'uploadImg': url + '/upload'
}

export default {

    getUrl() {

        return urls

    },

    addMaster(data) {

        return new Promise((resolve, reject) => {

            axios.post(this.getUrl().addmasternow, data)
            .then(res => {

                if(res.status === 200)
                {
                    if(res.data.status === 200)
                    {
                        resolve(res)
                    }
                }
                else reject(res)
            }).catch(err => {
                
                reject(err)

            })

        })

    },

    getState() {

        return new Promise((resolve, reject) => {

            axios.get(this.getUrl().getState)
            .then(res => {

                if(res.status === 200)
                {
                    resolve(res)
                }

            }).catch(err => {

                reject(err)

            })

        })

    },

    createBlog(data) {

        // const config = {
        //     headers: {
        //       'content-type': 'multipart/form-data'
        //     }
        // };

        return new Promise((resolve, reject) => {

            axios.post(this.getUrl().createBlog, data)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })

        })

    },

    getBlogs()
    {
        return new Promise((resolve, reject) => {

            axios.get(this.getUrl().getBlogs)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })

        })
    },

    uploadImg(data) {

        // const config = {
        //     headers: {
        //       'content-type': 'multipart/form-data'
        //     }
        //   };
        console.log("here")
        console.log(data)

    }



}