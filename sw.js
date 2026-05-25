self.addEventListener('install', (e) => {
  console.log('PWA de Reportes instalada');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});