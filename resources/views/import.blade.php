<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Import File</title>
</head>
<body>
    <h2>Import Excel File</h2>
    <form action="/import-investors" method="post" enctype="multipart/form-data">
        @csrf
        <input type="file" name="excel-data" id="file">
        <button type="submit">Import Data</button>
    </form>
</body>
</html>