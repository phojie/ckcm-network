<!doctype html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Christ the King Network</title>
		<!-- Fonts -->
		<!-- Styles -->
		{{--  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">  --}}
		<link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
      <link rel="stylesheet" type="text/css" href="{{ asset('css/jie.css') }}">
      <link rel="manifest" href="{{ asset('manifest.json') }}">
      <link href="https://fonts.googleapis.com/css?family=Overlock" rel="stylesheet">
      
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link rel="shortcut icon"  href="fav.png" />
		<!--upscript-->      
	</head>
	<body>
		<div id="jie">
      ds
			<jie-app></jie-app>
		</div>
	</body>
		<!-- script -->
   <script src="https://www.gstatic.com/firebasejs/5.1.0/firebase-app.js"></script>
   <script src="https://www.gstatic.com/firebasejs/5.1.0/firebase-auth.js"></script>
	<script src="{{ asset('js/app.js') }}"></script>


</html>
