'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "85269f4e95f5ef8b0509dca9ea387b6c",
"assets/AssetManifest.bin.json": "5910aff42103cc5e95a378ff824d6bd9",
"assets/AssetManifest.json": "a75fceb5d017d8a0eac6a74eea1c4555",
"assets/assets/images/earth_clouds.webp": "3ee513925e1c582d750fe7ab4f882bbe",
"assets/assets/images/earth_dark.webp": "eb96d6895a408e9f24c748d201b14ec6",
"assets/assets/images/earth_daymap.webp": "bc08782694c0b575b4b0cc35ba3f3c53",
"assets/assets/images/earth_night.webp": "f45119015c5959d742beb5dc444e9930",
"assets/assets/images/earth_nightmap.webp": "58ff8c5e8e88405186a18bc4041662c4",
"assets/assets/images/earth_topology.webp": "8304e0e9986e0ada020ac084bcc5fe55",
"assets/assets/images/ic_earth_clouds.webp": "42ae7631acf0a646a9d1f180829f97e6",
"assets/assets/images/ic_earth_dark.webp": "3df9039fcaae94380357eb29dd5d92a3",
"assets/assets/images/ic_earth_daymap.webp": "f97ddb3831cf88014960bb07cc526322",
"assets/assets/images/ic_earth_night.webp": "22029e2ecce9b2734284413d02b5721e",
"assets/assets/images/ic_earth_nightmap.webp": "494b6b72e19fd266fc0835a2ff4bb2b3",
"assets/assets/images/ic_earth_topology.webp": "ffa6e67c728aba30d9e1fa99004c7066",
"assets/assets/images/ic_jupiter.webp": "aca3ea93e930908cb7cac725668b7482",
"assets/assets/images/ic_logo.webp": "7da136b6c3336e78dcc875c5daa28bc3",
"assets/assets/images/ic_mars.webp": "984b66caf07fd212b5d036bdfbd8d84a",
"assets/assets/images/ic_mercury.webp": "13c445c7dd768801f20d6dfc6d084cd4",
"assets/assets/images/ic_moon.webp": "24915d55ea60a63c9f223926b979dfc2",
"assets/assets/images/ic_neptune.webp": "5e1ecdd120f99f18a47cbc1175c7b26b",
"assets/assets/images/ic_saturn.webp": "717e7a188f055d36764aba3b5afee486",
"assets/assets/images/ic_sun.webp": "bf0376be9694c532e5d99a753b0e8b87",
"assets/assets/images/ic_uranus.webp": "6c954f4ca73ea266a0f12a73918d5109",
"assets/assets/images/ic_venus_atmosphere.webp": "2fff14ae191f547f15ab1e76125b7355",
"assets/assets/images/ic_venus_surface.webp": "8803ded5f765ece4dbfa358dcf1011fc",
"assets/assets/images/jupiter.webp": "d014ed8e9af290ede303abd33489ae7c",
"assets/assets/images/mars.webp": "f92e7bad625f03b2ef1596debe48d6e3",
"assets/assets/images/mercury.webp": "b67418e80cc42f7834db8b2620edb0ff",
"assets/assets/images/moon.webp": "36c663d3bfeb5c15a04b35dc17aad64d",
"assets/assets/images/neptune.webp": "008b2baa78db13d6e3a1b3a86cdc47a4",
"assets/assets/images/night_sky.webp": "8defe936bf01e3ac800f6e4bb84b18f8",
"assets/assets/images/rock_wall_13.webp": "725e8b1a1ccba3b14c5a4a75ad20ffd3",
"assets/assets/images/saturn.webp": "2cc9c0ba15b8e943ca8f3b902157964b",
"assets/assets/images/stars.webp": "fba6cf5199608710711550b42f5f20ee",
"assets/assets/images/sun.webp": "2ac20b104a6dbe48b62eb593cd781204",
"assets/assets/images/uranus.webp": "f5a511397ef59a7886b89041c34478c5",
"assets/assets/images/venus_atmosphere.webp": "16a78da017af33fc32079d06a7f3e759",
"assets/assets/images/venus_surface.webp": "5500923170202daae9d65d1602051e10",
"assets/assets/translations/de.json": "c3c774bde6191eeb623d060b33805789",
"assets/assets/translations/en.json": "cc86e6def654c1f65f78d7daae150e11",
"assets/assets/translations/es.json": "89be6d74f7cc8b3e47755699f7a614b9",
"assets/assets/translations/fr.json": "93f0338aba72ddbcbb9d8d2fb3b58fad",
"assets/assets/translations/ja.json": "941ed9fb8b8ae8b96ad78f6c6899d0cc",
"assets/assets/translations/ko.json": "341133ad7ca383a16e72417b9e543bb5",
"assets/assets/translations/planets/de.json": "bc0d25c09d3aa897f451ec943e36cbff",
"assets/assets/translations/planets/en.json": "0ddac2869da84c9117237c402180e7e6",
"assets/assets/translations/planets/es.json": "e982f97ae2e5eb8b788e8c9451efb420",
"assets/assets/translations/planets/fr.json": "53d17c7503bb449a72b7e215b6c35107",
"assets/assets/translations/planets/ja.json": "023d93e4e20a505f4d5a192f58600ab0",
"assets/assets/translations/planets/ko.json": "c7e518074bfa503455303041021f6ae7",
"assets/assets/translations/planets/pt.json": "42c5ce82d111d74587f1e61379740b01",
"assets/assets/translations/planets/ru.json": "8b8ee593d615bb90ecda2774fbcb770a",
"assets/assets/translations/planets/vi.json": "b99d0c61f234a15fbba35e78172e42ef",
"assets/assets/translations/planets/zh.json": "80aaf50941a848a1d21c6117e37a2d79",
"assets/assets/translations/pt.json": "f890bf84310882e49f673d34328d7d5e",
"assets/assets/translations/ru.json": "e4c095a8da48789a2a7df2a3d76ab002",
"assets/assets/translations/vi.json": "6dd4b1fcd3ec1fa85b3247639512b37e",
"assets/assets/translations/zh.json": "00271bf1aecdd22da7f251b049dd66c1",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "ad9a1978158d790e990cbbc85370300c",
"assets/NOTICES": "6f456bf982daf41e9ef821c938756f52",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/sst_base/assets/images/achievement.webp": "179e1bc0c88d378ff4cb011d92be044b",
"assets/packages/sst_base/assets/translations/de.json": "6a131aa6505813fa9b3aaa51c83ae0c5",
"assets/packages/sst_base/assets/translations/en.json": "0f178be98183c23d7c655ece5dc6c8d9",
"assets/packages/sst_base/assets/translations/es.json": "03b9863885ed312128e4c4556a45a1dc",
"assets/packages/sst_base/assets/translations/fr.json": "f9c59ab9412b4d626dc6de3ebe8db00c",
"assets/packages/sst_base/assets/translations/ja.json": "71f3c4708d59f761f0cc60661d18be4a",
"assets/packages/sst_base/assets/translations/ko.json": "657b17a760d136f9384e922b155c311f",
"assets/packages/sst_base/assets/translations/pt.json": "cc7f26174da1332ca3c625184a5c25d0",
"assets/packages/sst_base/assets/translations/ru.json": "f8bac1550fc4c6fabd6f950eae5adf2f",
"assets/packages/sst_base/assets/translations/vi.json": "49a5e33822b876f46ae44927326be247",
"assets/packages/sst_base/assets/translations/zh.json": "972a3d708c456eda1e4a3308cd81e41e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "a35a5222e4923a25a6337f49e615766b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "e7b4090082e56361bce9d5ef2ec2e81a",
"icons/Icon-192.png": "5ecbadc26adf167687de913b23b096e9",
"icons/Icon-512.png": "14ae8e39f00b69f34941b3c9c8a1c2f5",
"icons/Icon-maskable-192.png": "5ecbadc26adf167687de913b23b096e9",
"icons/Icon-maskable-512.png": "14ae8e39f00b69f34941b3c9c8a1c2f5",
"index.html": "b68b897943bc0a2459c5048bb31850c0",
"/": "b68b897943bc0a2459c5048bb31850c0",
"main.dart.js": "a0618536e42c6932c8015c06a74e4276",
"manifest.json": "d80c3819e435416100be08e54aa14564",
"version.json": "1b1e83d9aee1bb41fea9a1b9b860e6e8"};
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
