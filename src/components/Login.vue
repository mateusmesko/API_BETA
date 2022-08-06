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
    <button @click="products">PRODUTOS</button>
</div>
</template>

<script>
import axios from 'axios'

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
                app_type:'DESKTOP',
                info:{
                    model:'API TAG'
                }
            })
            
            localStorage.setItem('hash',response.data.data.hash)
            localStorage.setItem('ID','00000000-0000-0000-0000-000000000050')


            console.log("HASH LOCAL",localStorage.hash);
            console.log("DEVICED ID:",localStorage)
        },
        products(){
           
        const response = axios.get('product',{
            headers:{
                Authorization:'62ed79258902c-f69f7dbf87bad5e4ddd27157ec1c5c2d-6RWLM7ndrmDAMgP5o',
                
            }
        })
       console.log(response)
        
        }
    },
    async created(){
           
        const productos =await axios.get('http://localhost:8080/api/v2/product-category',{
            headers:{
                Authorization:'62ed7c7f94cf6-76747af643fb47ace152a7aa7d6cb126-IBy6kggAcrIMyxSOb',
                
            }
        })
       console.log(productos)
        
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
