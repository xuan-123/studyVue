<template>
    <div class="account">
       account
       <Test :toSon="msg"></Test>
    
    </div>
</template>
<script>

import Test from '../../components/Test/Test'

export default {
    components:{
        Test
    },
    data(){
        return{
            isShow:true,
            msg:'三月的风吹去冰冷的霜'
        }
    },
    methods:{
        
    },
   
}
</script>
<style scoped>
    .account{
        /* width: 750px;
        height: 1750px; 
        background-color: #ccc; 
        */
    }
</style>
