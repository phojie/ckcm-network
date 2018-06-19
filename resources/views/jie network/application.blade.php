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
		<link href="css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" />
		<link rel="shortcut icon"  href="fav.png" />

		<!--upscript-->
		<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>

	</head>
	<body>
		<div id="jie">
			<jie-app></jie-app>
		</div>
	</body>
		<!-- script -->
	<script src="{{ asset('js/app.js') }}"></script>

</html>
