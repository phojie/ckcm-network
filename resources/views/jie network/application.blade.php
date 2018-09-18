<!doctype html>
<html lang="{{ app()->getLocale() }}" xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
      <meta property="og:image" content="https://www.ckcm-network.com/imgs/ckcm-network-homepage-illustration.png" />
      <meta property="og:image:width" content="298"/>
      <meta property="og:image:height" content="298"/>
		<title>Christ the King Network</title>
		<!-- Fonts -->
		<!-- Styles -->
		<link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
      <link rel="stylesheet" type="text/css" href="{{ asset('css/jie.css') }}">
      <link rel="manifest" href="{{ asset('manifest.json') }}">
      {{--  <link href="https://fonts.googleapis.com/css?family=Overlock" rel="stylesheet">  --}}
		<link rel="shortcut icon"  href="jieIcons/favicon.ico" />
		<!--upscript-->      
      
       
	</head>
	<body>
		<div id="jie">
			<jie-app></jie-app>
		</div>
	</body>
		<!-- script -->
      <script>
      // Check that service workers are registered
    
      if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', () => {
         navigator.serviceWorker.register('/sw.js');
      });
      }
      </script>
      <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase-auth.js"></script>
      <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase-database.js"></script>
      <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase-storage.js"></script>

      <script src="{{ asset('js/app.js') }}"></script>

         
  

</html>
