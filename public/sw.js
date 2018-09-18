console.log('jIE! from sw.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');
if (workbox) {
console.log(`Yay! Workbox is loaded 🎉`);
} else {
console.log(`Boo! Workbox didn't load 😬`);
}


// workbox.routing.registerRoute(
//    new RegExp('\js\.*\.js'),
//    workbox.strategies.networkFirst()
// );

workbox.setConfig({debug: false})
workbox.routing.registerRoute(
   new RegExp('\js\.*\.js'),
   jsHandler
 );
 
 workbox.routing.registerRoute(
   new RegExp('\css\.*\.css'),
   cssHandler
 );