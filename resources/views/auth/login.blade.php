<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <script src="{{asset('js/app.js')}}"></script>
</head>
<body>
    <form action="/login" method="post" onsubmit="login()">
        <input type="email" name="email" id="emailLogin">
        <input type="password" name="password" id="passwordLogin">
        <input type="checkbox" name="remember" id="remember">
        <input type="submit" value="Login">
    </form>
    <hr><br>
    <form action="/register" method="post" onsubmit="register()">
        <input type="text" name="name" id="name">
        <input type="email" name="email" id="emailRegister">
        <input type="password" name="password" id="passwordRegister">
        <input type="password" name="password_confirmation" id="passwordRegister2">
        <input type="submit" value="Register">
    </form>
    <br>
    
    <script>
        function login(){
            event.preventDefault();

            let emailObj = document.querySelector("#emailLogin");
            let passwordObj = document.querySelector("#passwordLogin");
            let rememberObj = document.querySelector("#remember");

            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', {
                    email: emailObj.value,
                    password: passwordObj.value,
                    remember: rememberObj.value,
                }).then(response => {window.location = '/home'})
                .catch(error => {console.log(error.response)});
        });
        }

        function register(){
            event.preventDefault();

            let nameObj = document.querySelector("#name");
            let emailObj = document.querySelector("#emailRegister");
            let passwordObj = document.querySelector("#passwordRegister");
            let password2Obj = document.querySelector("#passwordRegister2");

            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/register', {
                    name: nameObj.value,
                    email: emailObj.value,
                    password: passwordObj.value,
                    password_confirmation: password2Obj.value,
                }).then(response => {window.location = '/home'})
                .catch(error => {console.log(error.response)});
            });
        }
    </script>
</body>
</html>