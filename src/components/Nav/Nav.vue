<template>
    <div class="nav">
        <router-link class="baritem" to="/home/find">发现</router-link>
        <router-link class="baritem" to="/home/video">视频</router-link>
        <router-link class="baritem" to="/home/me">我的</router-link>
        <router-link class="baritem" to="/home/account">账户</router-link>
        <router-link class="baritem" to="/home/yuncun">云村</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .router-link-active{
        background-color: #f0f0f0;
        color: rgb(3, 92, 92);
    }
   .nav{
       display: flex;
       width: 100%;
       height: 147px;
       line-height: 147px;
       /* font-size: 30px; */
       
   }
   .baritem{
       display: block;
       text-align: center;
       /* font-size: 16px; */
       font-size: 30px;
       flex: 1;
       /* height: 49px; */

   }
</style>