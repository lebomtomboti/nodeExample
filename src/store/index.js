import { createStore } from 'vuex'
import axios from 'axios'
/*eslint-disable */
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    setFruits
  },
  actions: {
    async addUser({commit},info){
      let data = await axios.post('http://localhost:7007/users/insert',info)
      if(data){
        toast("New user has been added",{
        })
      }
      console.log(data)
    },
  
    async loginUser({commit},username, password){
      let {data}= await axios.post('http://localhost:7007/users/signIn', username,password)
      console.log(data);
      $cookies.set('token',data.token)
      await router.push('/')
      location.reload()
    },
    async getFruits({commit}){
      let {data} = await axios.get('http://localhost:5050')('setFruits',data)
    },
    async addToCart({commit},fruit_id){
      let {data} = await axios.post('http://localhost:5050')
      console.log(data);
    }
  }, 
  modules: {
  }
})
