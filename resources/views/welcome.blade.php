<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React App</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap-4/css/bootstrap.min.css') }}" />
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <style type="text/css">
        .converter{
            padding: 20px;
            border: 1px solid #ccc;
            margin: 100px 50px 0px 50px;
            background: rgba(158, 158, 158, 0.26);
        }

        .input-block {
          margin-bottom: 20px;
          position: relative;
        }
        .errortip {
        font-weight: 700;
        font-size: 85%;
        color: #fff;
        background: #ff4242;
        border-radius: 4px;
        /*top: -12px;*/
        bottom: -9px;
        min-width: 30px;
        padding: 5px 10px;
        position: absolute;
        z-index: 999;
        }
        .errortip.right {
        right: 0;
        }
        .errortip.right span.arrow{right: 10px;}
        .errortip .arrow {
        position: absolute;
        display: block;
        /*bottom: -10px;*/
        top: -10px;
        width: 0;
        height: 0;
        border: 5px solid transparent;
        /*border-top: 5px solid #ff4242;*/
        border-bottom: 5px solid #ff4242;
        }
        .errortip .text {
        white-space: nowrap;
        }

        .inline{display: inline-flex;}
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
