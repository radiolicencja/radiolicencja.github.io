'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fd168f9409c717a5f5a99b30d7b6c7c2",
"version.json": "c5550763d31fea65a7b85e4a1e681c25",
"splash/img/light-2x.png": "8875211bc6709f7ef07c5638c9bae403",
"splash/img/dark-4x.png": "eb12f3ec2e1395030f455d8a4b160c72",
"splash/img/light-3x.png": "5654427e043f26598fb75294674c1517",
"splash/img/dark-3x.png": "5654427e043f26598fb75294674c1517",
"splash/img/light-4x.png": "eb12f3ec2e1395030f455d8a4b160c72",
"splash/img/dark-2x.png": "8875211bc6709f7ef07c5638c9bae403",
"splash/img/dark-1x.png": "2941a35bbd18e6a3e7ae334795a18b72",
"splash/img/light-1x.png": "2941a35bbd18e6a3e7ae334795a18b72",
"favicon.ico": "6ec76b6b72be18e8fc5a64f7b954d2e8",
"index.html": "f6121bca523f80dcc0ddb23f797c8c6c",
"/": "f6121bca523f80dcc0ddb23f797c8c6c",
"main.dart.js": "b1e8867fd934c03a15caeaceab3deea3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "442accf91f5be5535349efe1296f9073",
"icons/apple-touch-icon.png": "70d8eb59c11115a1bbe51de896152fad",
"icons/Icon-192.png": "dc5f0a0479e8bea243c1aaa678adf9af",
"icons/Icon-maskable-192.png": "dc5f0a0479e8bea243c1aaa678adf9af",
"icons/Icon-maskable-512.png": "9cc45079fbd3b51d29b654fde4456740",
"icons/Icon-512.png": "9cc45079fbd3b51d29b654fde4456740",
"manifest.json": "16b0295eafb06f127edfdecf052676fe",
"assets/AssetManifest.json": "38c1e0fd6e2196f502b2bf33f53a673c",
"assets/NOTICES": "76a19c325c5933c24e4f8fae9139f9ce",
"assets/FontManifest.json": "db4da6c29fb2ca806cf7923009c4ba39",
"assets/AssetManifest.bin.json": "86dca6f8db192733229f2bf52ae6bef9",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/gpt_markdown/lib/fonts/JetBrainsMono-Regular.ttf": "d09f65145228b709a10fa0a06d522d89",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6bcc7b0010a072cba190d0ce8efcd5df",
"assets/fonts/MaterialIcons-Regular.otf": "80c4f227df8eac01d26edeb790288069",
"assets/assets/images/procedury-i-zwyczaje-operatorskie.png": "0f5fef3f48474ff6380dff55e6c706ab",
"assets/assets/images/radiotechnika.png": "2ced9b2f00b08f65bd6b4bdebd56ef2a",
"assets/assets/images/topic_radio.png": "8e7b36cb437394a51889b3a689d2d6bb",
"assets/assets/images/bhp.png": "4f58d3ac39a345677f0eb43b6bd5da7a",
"assets/assets/images/nato_icao.png": "c6bc606f5ae96b6b9128303e9cb62b90",
"assets/assets/images/splash_horizontal.png": "35f886afe96d9574cb41e5d030de110a",
"assets/assets/images/splash_vertical.png": "154a7516f48d72ae965db48125d98b10",
"assets/assets/images/przepisy-dotyczace-radiokomunikacyjnej-sluzby-amatorskiej.png": "073f34e477f39e86356088825c0a2e69",
"assets/assets/images/literowanie_pl.png": "03bd0d63770a87010b1a7a65d461f6a4",
"assets/assets/question_images/radiotechnika-q102.png": "2b5a71d4d2bfd3f3b0886e570a7fd5ac",
"assets/assets/question_images/radiotechnika-q100.png": "f3d08797029dc1fa87c3a23960e202d7",
"assets/assets/question_images/radiotechnika-q101.png": "80e5017a173e4fee31beb85f0740e924",
"assets/assets/question_images/radiotechnika-q105.png": "223aa1a8367e00226c1cef1fb91d9b03",
"assets/assets/question_images/radiotechnika-q111.png": "f80ac4808697afad8d00e3590231a13f",
"assets/assets/question_images/radiotechnika-q110.png": "f80ac4808697afad8d00e3590231a13f",
"assets/assets/question_images/radiotechnika-q104.png": "e44c787e16bfb7d4636696e662af1a4a",
"assets/assets/question_images/radiotechnika-q112.png": "f80ac4808697afad8d00e3590231a13f",
"assets/assets/question_images/radiotechnika-q106.png": "e20b00ab8326e1502f09a07db7438aeb",
"assets/assets/question_images/radiotechnika-q099.png": "f3d08797029dc1fa87c3a23960e202d7",
"assets/assets/question_images/radiotechnika-q098.png": "05e5af4b926c9256ae151b63d4d216ab",
"assets/assets/question_images/radiotechnika-q265.png": "8cbdf998ab4f59b5a3ee9e3bc042c2ac",
"assets/assets/question_images/radiotechnika-q107.png": "e20b00ab8326e1502f09a07db7438aeb",
"assets/assets/question_images/radiotechnika-q113.png": "f80ac4808697afad8d00e3590231a13f",
"assets/assets/question_images/radiotechnika-q174.png": "0336aa57e2e7c7e89f2a8ea2d9f2260a",
"assets/assets/question_images/radiotechnika-q160.jpg": "5884a30fdd7dbefa7c13119d7dc4e925",
"assets/assets/question_images/radiotechnika-q202.png": "8dfb6392a41bc9c5ab6d75e78f14f30f",
"assets/assets/question_images/radiotechnika-q203.png": "8dfb6392a41bc9c5ab6d75e78f14f30f",
"assets/assets/question_images/radiotechnika-q175.png": "0336aa57e2e7c7e89f2a8ea2d9f2260a",
"assets/assets/question_images/radiotechnika-q188.png": "32791fd4fd890bebdb63305bb64aa42d",
"assets/assets/question_images/radiotechnika-q177.png": "aafa53052b0135510bfcfc3a28f3f862",
"assets/assets/question_images/radiotechnika-q200.png": "b8199ad98a5d3b89dcbf55e47520dcee",
"assets/assets/question_images/radiotechnika-q176.png": "aafa53052b0135510bfcfc3a28f3f862",
"assets/assets/question_images/radiotechnika-q189.png": "2470f36ecaff73fa17594b5a8e3f1bce",
"assets/assets/question_images/radiotechnika-q199.png": "b8199ad98a5d3b89dcbf55e47520dcee",
"assets/assets/question_images/radiotechnika-q172.png": "0336aa57e2e7c7e89f2a8ea2d9f2260a",
"assets/assets/question_images/radiotechnika-q210.png": "b8691ef86ac4943b18d8d2141f5330ac",
"assets/assets/question_images/radiotechnika-q204.png": "8dfb6392a41bc9c5ab6d75e78f14f30f",
"assets/assets/question_images/radiotechnika-q205.png": "f6e2d11e5cffd6a59aa4d33f99496958",
"assets/assets/question_images/radiotechnika-q173.png": "0336aa57e2e7c7e89f2a8ea2d9f2260a",
"assets/assets/question_images/radiotechnika-q198.png": "b8199ad98a5d3b89dcbf55e47520dcee",
"assets/assets/question_images/radiotechnika-q165.png": "78c9ee313522c76eaee320debaf08852",
"assets/assets/question_images/radiotechnika-q207.png": "b8691ef86ac4943b18d8d2141f5330ac",
"assets/assets/question_images/radiotechnika-q206.png": "b8691ef86ac4943b18d8d2141f5330ac",
"assets/assets/question_images/radiotechnika-q196.png": "b8199ad98a5d3b89dcbf55e47520dcee",
"assets/assets/question_images/radiotechnika-q182.png": "32791fd4fd890bebdb63305bb64aa42d",
"assets/assets/question_images/radiotechnika-q183.png": "32791fd4fd890bebdb63305bb64aa42d",
"assets/assets/question_images/radiotechnika-q197.png": "b8199ad98a5d3b89dcbf55e47520dcee",
"assets/assets/question_images/radiotechnika-q181.png": "32791fd4fd890bebdb63305bb64aa42d",
"assets/assets/question_images/radiotechnika-q195.png": "b8199ad98a5d3b89dcbf55e47520dcee",
"assets/assets/question_images/radiotechnika-q208.png": "b8691ef86ac4943b18d8d2141f5330ac",
"assets/assets/question_images/radiotechnika-q209.png": "b8691ef86ac4943b18d8d2141f5330ac",
"assets/assets/question_images/radiotechnika-q194.png": "b8199ad98a5d3b89dcbf55e47520dcee",
"assets/assets/question_images/radiotechnika-q180.png": "32791fd4fd890bebdb63305bb64aa42d",
"assets/assets/question_images/radiotechnika-q184.png": "32791fd4fd890bebdb63305bb64aa42d",
"assets/assets/question_images/radiotechnika-q190.png": "2470f36ecaff73fa17594b5a8e3f1bce",
"assets/assets/question_images/radiotechnika-q191.png": "2470f36ecaff73fa17594b5a8e3f1bce",
"assets/assets/question_images/radiotechnika-q185.png": "32791fd4fd890bebdb63305bb64aa42d",
"assets/assets/question_images/radiotechnika-q193.png": "b8199ad98a5d3b89dcbf55e47520dcee",
"assets/assets/question_images/radiotechnika-q187.png": "32791fd4fd890bebdb63305bb64aa42d",
"assets/assets/question_images/radiotechnika-q178.png": "aafa53052b0135510bfcfc3a28f3f862",
"assets/assets/question_images/radiotechnika-q179.png": "aafa53052b0135510bfcfc3a28f3f862",
"assets/assets/question_images/radiotechnika-q186.png": "32791fd4fd890bebdb63305bb64aa42d",
"assets/assets/question_images/radiotechnika-q192.png": "b8199ad98a5d3b89dcbf55e47520dcee",
"assets/assets/question_images/radiotechnika-q095.png": "e6c8980d7f62056c96f51f185c2c1600",
"assets/assets/question_images/radiotechnika-q257.png": "8cbdf998ab4f59b5a3ee9e3bc042c2ac",
"assets/assets/question_images/radiotechnika-q096.png": "e6c8980d7f62056c96f51f185c2c1600",
"assets/assets/question_images/radiotechnika-q097.png": "05e5af4b926c9256ae151b63d4d216ab",
"assets/assets/question_images/radiotechnika-q090.jpg": "dff0b84a1c44bcf1e24e490bd81ecd7f",
"assets/assets/question_images/radiotechnika-q091.jpg": "7f9dc2c4689ae2a0735d8fd12ae1f4d7",
"assets/assets/topics/rst.yaml": "ec4b78fb75793435a7133d2350a22eec",
"assets/assets/topics/sample-image-topic.yaml": "502ba10fb358309257273deca1a7b007",
"assets/assets/topics/radiotechnika-inne-md-mdnum.yaml": "88ed368f02d476df2ee467e0102f70e3",
"assets/assets/topics/polish_spelling.yaml": "98837b248db1418711635247fecbc1ea",
"assets/assets/topics/procedury-i-zwyczaje-operatorskie.yaml": "befecc76ca44cd9f0f5eec0888c5976e",
"assets/assets/topics/radiotechnika-fale-anteny-linie-propagacja-md-mdnum.yaml": "b25cff947cc95d5f0b2d252229b911ad",
"assets/assets/topics/radiotechnika-schematy-blokowe-md-mdnum.yaml": "67ae4ea652af7e69505757759429245b",
"assets/assets/topics/radiotechnika-pomiar-przyrzady-md-mdnum.yaml": "4fef4d1876f43b66d214e12367f13f76",
"assets/assets/topics/kod_q.yaml": "8fb8063ef818e3a31e31fb28228e05cb",
"assets/assets/topics/radiotechnika-modulacja-emisje-pasma-md-mdnum.yaml": "3c63f1d5cbf7a2c0587e8107d80a2e53",
"assets/assets/topics/radiotechnika-elektrotechnika-md-mdnum.yaml": "4b47e36fdcaf5baf1578def73c35b797",
"assets/assets/topics/sample-topic.yaml": "365f88959f6f206691d0371ded887001",
"assets/assets/topics/nato_phonetic.yaml": "97c0cee612977944e125712d8df8bedb",
"assets/assets/topics/radiotechnika-rlc-filtry-rezonans-md-mdnum.yaml": "9f5ace16f496946983a81af51e5547d3",
"assets/assets/topics/przepisy-dotyczace-radiokomunikacyjnej-sluzby-amatorskiej.yaml": "373397de383a54ff22cb2990f4af057e",
"assets/assets/topics/radiotechnika.yaml": "bca65506633d54837b3db4d63687b3eb",
"assets/assets/topics/bhp.yaml": "9ce6d872d3e8ff78da0152cbc955f226",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
