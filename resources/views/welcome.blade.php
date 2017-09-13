<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React App</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap-4/css/bootstrap.min.css') }}" />
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <style type="text/css">
        .converter{
            padding: 20px;
            border: 1px solid #ccc;
            margin: 100px 50px 0px 50px;
            background: beige;
        }
    </style>
</head>
<body>

    <div class="container-fluid">
        <div class="container">
            <img src="{{ asset('assets/images/react.svg') }} " width="500" class="img-responsive" />     
        </div>

        <div id="app"></div>

    </div>

    <script type="text/javascript" src="{{ asset('assets/js/app.js') }}"></script>

</body>
</html>
