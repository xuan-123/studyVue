<template>
    <div style="border:1px solid #ccc;margin-bottom:20px">
        <slot>
            <div v-for="(item,index) in pLanguages" :key="index">{{item}}</div>
        </slot>
        <button @click="btn()">按钮</button>

       
    </div>
</template>

<script>
export default {
    props:['toSon'],
    data(){
        return {
         
            isShow:true,
            pLanguages:['js','java','p','C']
        }
    },
    methods:{
       
        btn(){
          
        }
    },
    mounted(){
        
    }
}
</script>

<style>
    .showTar{
        width: 400px;
        height: 400px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -200px;
        background-color: red;
        
    }
</style>