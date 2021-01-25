<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
</head>
<body>
    <div id="vue">
        <form action="/login" method="post" v-on:submit.prevent="login">
            <input type="email" name="email" v-model="emailLogin">
            <input type="password" name="password" v-model="passwordLogin">
            <input type="checkbox" name="remember" v-model="remember">
            <input type="submit" value="Login">
        </form>
        <hr><br>
        <form action="/register" method="post">
            <input type="text" name="name" v-model="name">
            <input type="email" name="email" v-model="emailRegister">
            <input type="password" name="password" v-model="passwordRegister">
            <input type="password" name="password_confirmation" v-model="passwordRegister2">
            <input type="submit" value="Register">
        </form>
        <br>
    </div>
    
    
    <script>
        axios.get('/sanctum/csrf-cookie');
        
        var vm = new Vue({
            el: '#vue',
            data: {
                test: 'Hi'
            },
            methods: {
                login: function(){
                    alert(this.emailLogin)
                }
            }
        })
    </script>
    <noscript>
        You need javascript enabled to use this site
    </noscript>
</body>
</html>