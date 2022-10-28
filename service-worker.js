/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9cb912db13555d8dbd7c23b71715a6b9"
  },
  {
    "url": "assets/css/0.styles.c2a9e8bf.css",
    "revision": "b2e4efe7dba513847e325ecc80f78eb6"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.c023e217.js",
    "revision": "219f549af5373561d94328f886e0a50c"
  },
  {
    "url": "assets/js/10.8ad7d2ba.js",
    "revision": "ef3ffe199ad6180b4c2bd332e1339634"
  },
  {
    "url": "assets/js/11.a7014beb.js",
    "revision": "1b8f7fdab530f78ebbcdbf64d4490c0c"
  },
  {
    "url": "assets/js/12.29af2039.js",
    "revision": "7b084b3ec4c886b8c8039f4c89857913"
  },
  {
    "url": "assets/js/13.bdea7dee.js",
    "revision": "0014798c42e813ebd8ea7ce7815eb260"
  },
  {
    "url": "assets/js/14.604ba2cb.js",
    "revision": "c0511ca1c521072157123946794e6d90"
  },
  {
    "url": "assets/js/15.8e5f88ff.js",
    "revision": "c98e4d7fe61f788bbebd5f497450a814"
  },
  {
    "url": "assets/js/3.8ea194bf.js",
    "revision": "c82593f9569a6ce02dd2a2bd48b9e5cd"
  },
  {
    "url": "assets/js/4.9125ca69.js",
    "revision": "4ea1af26fe43e7d677372ddefcdd5f85"
  },
  {
    "url": "assets/js/5.830a3203.js",
    "revision": "97fbd3648de8790ef64df2dbdbe1138b"
  },
  {
    "url": "assets/js/6.a96484cb.js",
    "revision": "9fdcf510481ad1dad5b46befc5a5219f"
  },
  {
    "url": "assets/js/7.0b259e23.js",
    "revision": "5ad7d599faff13c754ae5a75daa8f5cb"
  },
  {
    "url": "assets/js/8.dfaac197.js",
    "revision": "04a812ad6b2e7f45fdfb5baba2f67007"
  },
  {
    "url": "assets/js/9.37df4178.js",
    "revision": "3bc9ae52ececd48d134071f39173d167"
  },
  {
    "url": "assets/js/app.786680f7.js",
    "revision": "f04bd95d733fbb502d080c9027d82a9f"
  },
  {
    "url": "categories/index.html",
    "revision": "55d375d3bbb0d66c94a3b4c26ed63bd9"
  },
  {
    "url": "index.html",
    "revision": "435b4d30388f47fb03925c9100bcc72c"
  },
  {
    "url": "Life Share/JsBook.html",
    "revision": "944ef2845f99eb4c709d14f91c35e1b2"
  },
  {
    "url": "Life Share/SkirtShare.html",
    "revision": "fff0244a466e858c101f1fbed3a2cc5f"
  },
  {
    "url": "tag/index.html",
    "revision": "13dd0ad340cc55260c441ea1112a70b0"
  },
  {
    "url": "tag/tool/index.html",
    "revision": "c8bfa70225337cf7a7f37f8518b05d79"
  },
  {
    "url": "Technical Articles/Http.html",
    "revision": "0d9be45d778a6e1e98b27185dc732a03"
  },
  {
    "url": "Technical Articles/JS.html",
    "revision": "0d4b749017f83f22bf8228d222906fcb"
  },
  {
    "url": "timeline/index.html",
    "revision": "2146dd86bf735ea2cee5e19cad3174c8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
