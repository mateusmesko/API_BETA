<template>
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
            
            const response = await axios.post('app/auth',{
                
                login_code:this.login_code,
                pin:this.pin_code,
                device_id:'00000000-0000-0000-0000-000000000040',
                app_type:'DESKTOP',
                info:{
                    model:'PDV2'
                }
            })

            console.log(response);
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
