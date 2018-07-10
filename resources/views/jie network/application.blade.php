<!doctype html>
<html lang="{{ app()->getLocale() }}" xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
      <meta property="og:image" content="favicon.ico" />
		<title>Christ the King Network</title>
		<!-- Fonts -->
		<!-- Styles -->
		<link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
      <link rel="stylesheet" type="text/css" href="{{ asset('css/jie.css') }}">
      <link rel="manifest" href="{{ asset('manifest.json') }}">
      {{--  <link href="https://fonts.googleapis.com/css?family=Overlock" rel="stylesheet">  --}}
		<link rel="shortcut icon"  href="favicon.ico" />
		<!--upscript-->      
	</head>
	<body>
		<div id="jie">
			<jie-app></jie-app>
		</div>
	</body>
		<!-- script -->
   <script src="https://www.gstatic.com/firebasejs/5.1.0/firebase-app.js"></script>
   <script src="https://www.gstatic.com/firebasejs/5.1.0/firebase-auth.js"></script>
	<script src="{{ asset('js/app.js') }}"></script>


</html>
