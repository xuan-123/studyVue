<template>
  <div>
      yuncun
      <button @click="an()">退出登录</button>
      <div @click="myMsg()">我的信息</div>
     
  </div>
</template>

<script>
 import {request} from '../../request/index'

export default {
  components:{
  
  },
  data(){
    return{
      data:[]
    }
  },
    methods:{
      an(){
        window.sessionStorage.clear()
        this.$router.push('/login')
      },
      myMsg(){
        request({
          url:'/login/status'
        }).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      }
    }
}
</script>

<style>

</style>