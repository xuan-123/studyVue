<template>
    <div class="login">
        <img src="../../assets/img/backimg.jpg" alt="">
        <form >
            <div class="userLogin"  v-show="loginFlag1">
                <label for="username">
                    手机号：
                    <input type="text" id="username" v-model="username" class='contextK'>
                </label>
                <br>
                <label for="password">
                    密&nbsp;&nbsp;&nbsp;码：
                    <input type="password" id="password" v-model="password"  class='contextK'>
                </label>
                <br>
                <button class='btnLogin' @click="userlogin()">登录</button>
                <br>
                <span class="loginFlag" @click="mmlogin()">使用验证码登录</span>
            </div>
            <div class="yzmLogin" v-show="loginFlag2">
                    <label for="tel">
                        手机号：
                        <input type="text" id="tel" v-model="tel" class='contextK'>
                    </label>
                <br>
                <label for="yzm">
                         验证码：
                            <input type="text" id="yzm" v-model="yzm" class='contextK'>
                            <span class="yzmBtn" @click="sendYzm">{{sendyzm}}</span>
                        </label>
                    <br>
                <button class='btnLogin' @click="tellogin()">登录</button>
                <br>
                <span  class="loginFlag" @click="zymlogin()">使用密码登录</span>
            </div>
            
        </form>
        
       
    </div>
</template>
<script>
import {request} from '../../request/index'
export default {
    data(){
        return{
            username:'', //用户名
            password:'',//密码
            tel:'',//手机号
            yzm:'',//验证码
            loginFlag1:true,
            loginFlag2:false,
            sendyzm:'发送验证码'
        }
    },
    methods:{
        //使用密码登录切换
        mmlogin(){
            this.loginFlag1 = false
            this.loginFlag2 = true
            this.tel = ''
            this.yzm = ''
        },
        //使用验证码登录 切换
        zymlogin(){
            this.loginFlag1 = true
            this.loginFlag2 = false
            this.username = '',
            this.password = ''
        },
        //密码登录按钮
        userlogin(){
            if(this.username==''){
                alert('手机号不能为空')
                return
            }
            if(this.password ==''){
                alert('密码不能为空')
                return
            }
            if(this.username.length!=11){
                alert('手机号长度必须是11位')
                return
            }
            if(this.password.length<6||this.password.length>18){
                alert('登录密码必须介到6到18位')
                return
            }
            //登录
            request({
                url:'/login/cellphone',
                params:{
                    phone:this.username,
                    password:this.password
                }
                }).then(res=>{
                    console.log(res)
                   if(res.data.code == 200){//登录成功
                        const token = res.data.token
                        window.sessionStorage.setItem('token',token)
                        alert('登录成功')
                        this.$router.push('/yuncun')
                    }else if(res.data.code==502){ //密码有误
                        alert(res.data.msg)
                        return
                    }
                   
            }).catch(err=>{
                console.log(err)
            })
        },
        //验证码登录按钮
        tellogin(){
            
        },
        //发送验证码
        sendYzm(){
            //倒计时模块。
            this.sendyzm = 6
           let timer = setInterval(() => {
                this.sendyzm--
                if(this.sendyzm==0){
                    this.sendyzm = '请输入验证码'
                    clearInterval(timer)
                    return
                }
            }, 1000);
        }

    }
}
</script>
<style scoped>
    .yzm{
        position: relative;
       
    }
    .yzmBtn{
  
        color: #C20C0C;
        font-size: 12px;
        position: absolute;
        right: 125px;
        top: 80px;
    }
    .loginFlag{
        text-align: center;
        margin-left: 330px;
        margin-top: 20px;
        display:block;
    }
     form{
         color:#fff;
         width: 100%;
         /* background-color: #000; */
         position:fixed;
         bottom: 300px;
     }
     input{
         padding: 0 10px;
        margin-bottom: 20px;
     }
    .contextK{
        width: 400px;
        height: 50px;
        border-radius: 10px;
        border: none;
    }
    .btnLogin{
        outline:none;
         width: 500px;
          height: 60px;
        border: none;
        background-color: #fff;
        color:#C20C0C;
        border-radius: 30px;

    }
    
     div{
        width: 100%;
        height: 100%;
        background-color: #C20C0C;
    }
    img{
        width: 100%;
        margin-top: 80px;
    }
    .login{
        text-align: center;
    }
    .yzmBtn{
        
    }
</style>