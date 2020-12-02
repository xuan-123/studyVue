import axios from 'axios'
export function request(config){
    const instance = axios.create({
         baseURL:'http://localhost:3000',
    })

    //请求头
    instance.interceptors.request.use(config => {
        //为每次的请求接口都将token放到headers中
        config.headers.Authorization = window.sessionStorage.getItem('token')
        console.log(config)
        return config
    })
    //响应头
    instance.interceptors.response.use(function(response){
        return response
    }),function(err){
        return Promise.reject(err)
    }

    return instance(config)
      
}