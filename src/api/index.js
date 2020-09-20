import axios from 'axios'

var url = `http://localhost:8081`

var urls = {
    url: url,
    'addmasternow': url + '/addmasternow',
    'getBlogs': url + '/getblogs',
    'getBlog': url + '/getblog/',
    'getSelf': url + '/getself',
    'shutdown': url + '/togglestate',
    'search': url + '/search',
    'getState': url + '/getstate'
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

    }



}