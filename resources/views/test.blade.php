<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello</title>
    <style>
        body{
            background-color: antiquewhite;
        }
        .p-4{
            padding: 10px;
        }
        table, tr{
            border: 1px solid black;
        }
    </style>
</head>
<body class="p-4">
    <h2>Investment Summary</h2>
    <hr>
    <br>
    <p>
        An Investment was created on your behalf. Below are the details of your investment
    </p>
    <ul>
        <li>Amount: {{$investment->amount}}</li>
        <li>Rate: {{$investment->rate}}</li>
    </ul>
    <p>Thanks for doing business with us</p>
</body>
</html>