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
    "revision": "af48ac0d276ae98b86fff3c5e3791659"
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
    "revision": "90706884500eecb292c50832dbec0489"
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
    "url": "static/js/main.db7577b1.js",
    "revision": "9c5105e6d03883c89230d5a4e1d11601"
  },
  {
    "url": "static/js/main.db7577b1.js.LICENSE.txt",
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
