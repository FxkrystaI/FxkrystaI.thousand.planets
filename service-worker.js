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
    "revision": "35ac1f28f080b4105436852eca5cb04e"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.4073c787.js",
    "revision": "2f119d8cf4f38c972c899f65443f519c"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.033db9c6.js",
    "revision": "e47a2d221ec3e6b79cd24b408109446a"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.ea616527.js",
    "revision": "84c18ada04d7f96157697988af640b74"
  },
  {
    "url": "assets/js/15.92bf9ad9.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.172ea8bd.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.6dca6077.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.1ea1d894.js",
    "revision": "0ce5adb05e88c5cc6415e2b04c81844f"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.42a2d02c.js",
    "revision": "1e23c970e9216fb1746af8137f9afee4"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "360503435f665c2aaae03757290d1034"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4afcaf44b4971073ba494fb14117e97e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1620c24c5c79955fe049395828426b58"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0fdfc500612a40fd908ddc5c0bc98ee4"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "493043eccc00fae258d3511519311293"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "1330d2ec20dbbe3191ad778f50dcf9ec"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "a0de90b1e4546f9a8917995d58845660"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "6341a4833d23850c4611b327d11327a0"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "8966f766225c9a004874afb9e84da27b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b60b79a3efac333acc15c82c865c033b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2f40562cd775b17938431af1be457770"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "057cf8897b4727279e30dceafa96b050"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "320f36370cfb06ef8281045ad4941893"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "2e0cb3689e92ef79e5bfc789ec8e4c24"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8355110e83cad46d701d971faec858a9"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "69353b1156287287bba66b5bd1e980e9"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6aaacf5787cc4154a6e17c94b4d0f6b4"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "5a0da5eb832e2fa2b234e000ff2c3d2b"
  },
  {
    "url": "timeline/index.html",
    "revision": "0eb5b34f39594bca5287671fcb265c65"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "339644148df294bb46cf2f2fd4bbb784"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "395c2e91879cd3956ed7051856357aec"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4e3b9fb192f022b8097f865e0415ebd9"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "adba347fb1f517e0b07aeb8fa894aa0c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3d870f083cd5e80abb336d2bba794da7"
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
