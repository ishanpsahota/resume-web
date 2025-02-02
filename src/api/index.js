import axios from 'axios'

// var url = `http://localhost:8081`
var url = `https://api-ishanpsahota.herokuapp.com`

var urls = {
    url: url,
    'addmasternow': url + '/addmasternow',
    'getBlogs': url + '/blog/get',
    'getBlog': url + '/blog/get/',
    'getBlogsAll': url + '/blog/getall',
    'getSelf': url + '/getself',
    'shutdown': url + '/togglestate',
    'search': url + '/search',
    'getState': url + '/getstate',
    'createBlog': url + '/blog/new',    
    'uploadImg': url + '/upload/',
    'deleteBlog': url + '/blog/update/delete',
    'showBlog': url + '/blog/update/show',
    'createResume': url + '/resume/new',
    'getresume': url + '/resume/get',
    'editresume': url + '/resume/edit'
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

    getAllBlogs()
    {
        return new Promise((resolve, reject) => {

            axios.get(this.getUrl().getBlogsAll)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })

        })
    },

    getBlog(blogid)
    {
        return new Promise((resolve, reject) => {

            axios.get(this.getUrl().getBlog + blogid)
            .then(res => {

                resolve(res)

            }).catch(err => {
                reject(err)
            })

        })
    },

    uploadImg(image, name, type) {

        const formData = new FormData()

        formData.append('image', image, name)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        return new Promise((resolve, reject) => {

            axios.post(this.getUrl().uploadImg + type, formData, config)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
            

        })

    },


    deleteBlog(randomId)
    {
        var id = { randomId }

        // console.log(id)

        if(!randomId) return new Error("Missing parameters")
        else
        {
            return new Promise((resolve, reject) => {

                axios.post(this.getUrl().deleteBlog, id)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })

            })
        }
    },

    showBlog(randomId)
    {
        var id = { randomId }

        // console.log(id)

        if(!randomId) return new Error("Missing parameters")
        else
        {
            return new Promise((resolve, reject) => {

                axios.post(this.getUrl().showBlog, id)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })

            })
        }
    },

    // resume
    
    createResume(resume)
    {
        return new Promise((resolve, reject ) => {

            axios.post(this.getUrl().createResume, {resume})
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })       
        })
    },

    getResume()
    {
        return new Promise((resolve, reject) => {

            axios.get(this.getUrl().getresume)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })

        })
    },

    updateResume(resume)
    {
        return new Promise((resolve, reject) => {

            axios.post(this.getUrl().updateResume, resume)
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })

        })
    }


}
