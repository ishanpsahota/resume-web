import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from '../api/index'
import jwt from 'jsonwebtoken'


var url = api.getUrl().url;

Vue.use(Vuex)


axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',         
        rights: localStorage.getItem('rights'),
        whoami: localStorage.getItem('whoami'),
        mode: localStorage.getItem('mode')
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },

        auth_success(state, token, whoami) {
            state.status = 'success',
            state.token = token,                      
            state.whoami = whoami            
        },

        auth_error(state){
            state.status = 'error'
        },

        logout(state){
            state.status = '',
            state.token = '',
            state.whoami = ''            
        },

        changeMode(state) {
            state.mode = state;
        }
    },
    actions: {
        login({commit}, user) {         
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: url + '/login', data: user, method: 'POST' })
                .then(resp => {

                    if(resp.status === 200 || resp.status === 201)
                    {                        
                        var token = resp.data.token                                                                      
                        var decoded = jwt.decode(token, 'secret')
                        var whoami = decoded.whoami;

                        localStorage.setItem('token', token);                         
                        localStorage.setItem('whoami', whoami)                                               
                        
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;                        
                        
                        commit('auth_success', token, whoami );
                        resolve(resp);
                    }
                    else reject(resp)                    
                })
                .catch(err => {
                   
                    commit('auth_error')
                    localStorage.removeItem('token');                                     
                    localStorage.removeItem('whoami');                                                       
                    reject(err)
                })
            })
		},
		
        logout({commit}){
            return new Promise((resolve, reject) => {
                    commit('logout')
                    localStorage.removeItem('token')
                    localStorage.removeItem('whoami');                       
                    resolve()
                    if(!resolve())
                    {
                        reject();
                    }
            })
		},

		changeMode({commit}, mode)
		{
			commit('changeMode');
			localStorage.setItem('mode', mode);
		}
		
    },
    getters : {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,     
		userToken: state => state.token,            
		whoami: state => state.whoami,
		mode: state => state.mode
	}
})
