const CACHE="fuwari-dd2b981983fa";
const FILES=["./","./assets/face.worker-COQolMDd.js","./assets/heic2any-DQxJzxPi.js","./assets/index-BI-jLW6Q.js","./assets/index-D3ugSltt.css","./assets/process.worker-FuHlDXd0.js","./icon-192.png","./icon-512.png","./icon.svg","./index.html","./licenses.txt","./manifest.webmanifest","./models/face_landmarker.task","./wasm/vision_wasm_internal.js","./wasm/vision_wasm_internal.wasm","./wasm/vision_wasm_nosimd_internal.js","./wasm/vision_wasm_nosimd_internal.wasm"];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('fuwari-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match('./index.html')));
  } else {
    event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
  }
});
