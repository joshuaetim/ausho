<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <Link rel='stylesheet' href="{{ url('css/app.css') }}"/>
        <link rel="stylesheet" href="https://unpkg.com/@tabler/core@1.0.0-alpha.21/dist/css/tabler.min.css" />
        <title>Laravel</title>
    </head>
    <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    </body>
    <script src="{{asset('js/app.js')}}"></script>
</html>
