importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');

if (workbox) {
console.log(`WB IS OK`);
workbox.core.setCacheNameDetails({
prefix: 'TEST-SW',
suffix: 'v1'

});
workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "55897c7b04429303e44e9add8c73122a"
  },
  {
    "url": "images/lesson1.png",
    "revision": "4ee1a9fd0ad44f60af0b347169a14e7c"
  },
  {
    "url": "images/lesson2.png",
    "revision": "7899c6bc60c16e8dc1ba22066a906a28"
  },
  {
    "url": "images/lesson3.png",
    "revision": "1ffa9a7571474c586fecf52fe2df2bf7"
  },
  {
    "url": "images/lesson4.png",
    "revision": "7018110b19019d3728127a0d46a25b9f"
  },
  {
    "url": "index.html",
    "revision": "b5bd3b31980f3095ba3764c3e023a7de"
  },
  {
    "url": "logo192.png",
    "revision": "33dbdd0177549353eeeb785d02c294af"
  },
  {
    "url": "logo512.png",
    "revision": "917515db74ea8d1aee6a246cfbcc0b45"
  },
  {
    "url": "manifest.json",
    "revision": "6fd731465071aaa9ac20492d4cc0bc58"
  },
  {
    "url": "static/css/main.350d7298.css",
    "revision": "01ed564af93e37132875dedb26a76e31"
  },
  {
    "url": "static/js/main.d1d07467.js",
    "revision": "b510869bb7b9d83d89405c9ce916f2f8"
  },
  {
    "url": "static/js/main.d1d07467.js.LICENSE.txt",
    "revision": "d2f7bb98f025f0e7c5855f79146fc17d"
  }
]);
self.addEventListener("message", event => {
if (event.data && event.data.type === "SKIP_WAITING") {
skipWaiting();
}
});

workbox.routing.registerRoute(
/\.(?:png|jpg|jpeg|svg|gif)$/,
new workbox.strategies.CacheFirst({
cacheName: 'image-cache',
plugins: [
new workbox.expiration.Plugin({
maxEntries: 25,
maxAgeSeconds: 7 * 24 * 60 * 60,
})
],
})
);
} else {
console.log("WB ERROR");
}
