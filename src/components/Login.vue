<template>
<div>
    <form @submit.prevent="handleSubmit" action="">
        <h3>Login</h3>
        <div class="form-group">
            <label>LOGIN CODE</label>
            <input type="text" v-model="login_code" class="form-control" placeholder="CODE">
        </div>

        <div class="form-group">
            <label>PIN CODE</label>
            <input type="text" v-model="pin_code" class="form-control" placeholder="PIN">
        </div>
        <button class="btn btn-primary btn-block">Sign Up</button>
    </form>
    <button class="" @click="products">PRODUTOS</button>
    <button class="" @click="productsA">PRODUTOS await</button>
</div>
</template>

<script>
import axios from './../axios.js'

export default {
    data(){
        return{
            login_code:'',
            pin_code:''
            
        }
    },
    methods:{
       
        async handleSubmit(){
            
            const response = await axios.post('/app/auth',{
                
                login_code:this.login_code,
 
                pin:this.pin_code,
                device_id:'50',
                app_type:'SERVER',
                info:{
                    model:'API TAG'
                }
            })
            
            localStorage.setItem('hash',response.data.data.hash)
            localStorage.setItem('ID','50')


            console.log("HASH LOCAL",localStorage.hash);
            console.log("DEVICED ID:",localStorage)
        },
        async products(){
           
         const productos =await axios.get('/product',{
            
            headers:{
                "Authorization": localStorage.hash,
                "Device-ID":localStorage.ID,
                "Content-Type":"application/json"
            },          
        });
       
       console.log(productos.data.data)
        
        },
        productsA(){
            axios.get('product').then((response)=>console.log(response)).catch((error)=>console.log(response)); 
        }
        
    }
   
           
       
    
}
</script>

<style>
    form{
        margin-left: 3%;
        margin-right: 3%;
        margin-top:1
    }
</style>
