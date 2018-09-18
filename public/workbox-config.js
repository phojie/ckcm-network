module.exports = {
   cacheId: 'hr-app-'+Math.floor(Date.now() / 1000),
   globDirectory: "public/",
   globPatterns: [
     "**/*.{css,ico,eot,svg,ttf,woff,woff2,js,json}",
     "images/*.{png,jpg,jpeg,gif,bmp}",
   ],
    
   swDest: "public\\sw.js",
   // Define runtime caching rules.
   runtimeCaching: [
     {
       urlPattern: "/",
       handler: 'networkFirst',
          
     },
   
   ],
 };