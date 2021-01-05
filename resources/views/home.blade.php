<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <script src="{{asset('js/app.js')}}"></script>
</head>
<body>
    <h1>
        Welcome, {{auth()->user()->name}}
    </h1>
    <div id="result"></div>
    <form action="/api/logout" method="post" onsubmit="logout()">
        <input type="submit" value="Logout">
    </form>

    <hr><br>
    <h3>Create Investor</h3>

    <form action="#" method="post" onsubmit="createInvestor()">
        <input type="text" name="name" id="name"><br>
        <input type="email" name="email" id="email"><br>
        <textarea name="address" id="address" cols="20" rows="2"></textarea><br>
        <input type="text" name="phone" id="phone" placeholder="phone"><br>
        <input type="text" name="bank" id="bank" placeholder="bank"><br>
        <input type="text" name="accountName" id="accountName" placeholder="acct name"><br>
        <input type="text" name="accountNumber" id="accountNumber" placeholder="acc num"><br>
        <input type="submit" value="Create Investor"><br>
    </form>

    <br><hr>
    <h3>Add Category</h3>
    <form action="#" method="post" onsubmit="addCategory()">
        <input type="text" name="name" placeholder="name" id="nameCategory">
        <input type="submit" value="Add">
    </form>

    <script>
        var resultObj = document.querySelector("#result");

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get('/api/investors').then(response => {resultObj.innerHTML = JSON.stringify(response)})
            .catch(error => {console.log(error.response['data'])})
        });

        function logout(){
            event.preventDefault();
            axios.post('/logout').then(response => {window.location = '/login'})
            .catch(error => {console.log(error.response)})
        }

        function createInvestor()
        {
            event.preventDefault();
            
            let nameObj = document.querySelector("#name");
            let emailObj = document.querySelector("#email");
            let address = document.querySelector("#address");
            let phone = document.querySelector("#phone");
            let bank = document.querySelector("#bank");
            let accountName = document.querySelector("#accountName");
            let accountNumber = document.querySelector("#accountNumber");

            axios.post('/api/investors', {
                name: nameObj.value,
                email: emailObj.value,
                address: address.value,
                phone: phone.value,
                bank: bank.value,
                account_name: accountName.value,
                account_number: accountNumber.value,
            }).then(response => {resultObj.innerHTML = JSON.stringify(response)})
            .catch(error => {console.log(error.response)})
        }

        function addCategory()
        {
            event.preventDefault();

            let nameObj = document.querySelector("#nameCategory");

            axios.post('/api/categories', {
                name: nameObj.value,
            }).then(response => {resultObj.innerHTML = JSON.stringify(response)})
            .catch(error => {console.log(error.response)});
        }
    </script>
</body>
</html>