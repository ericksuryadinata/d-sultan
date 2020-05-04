const cacheName = "dsultan-kering-tempe"
const assets = [
    "/",
    "/index.html",
    "/assets/css/main.min.css",
    "/assets/css/slider.min.css",
    "/assets/js/slider.min.js",
    "/assets/js/main.min.js",
    "/assets/img/dsultan-kering-tempe.webp",
    "/assets/img/dsultan-kering-tempe-250-gram.webp",
    "/assets/img/dsultan-kering-tempe-500-gram.webp",
    "/assets/img/dsultan-kering-tempe-dengan-nasi.webp",
    "/assets/img/dsultan-kering-tempe-kemasan.webp",
    "/assets/img/dsultan-kering-tempe-mangkuk.webp",
    "/assets/img/dsultan-kering-tempe-order.webp",
    "/assets/img/dsultan-kering-tempe-teri-tuban.webp",
    "/assets/img/dsultan-kering-tempe-testimonial-1.webp",
    "/assets/img/dsultan-kering-tempe-testimonial-2.webp",
    "/assets/img/dsultan-kering-tempe-testimonial-3.webp",
    "/assets/img/dsultan-kering-tempe-testimonial-4.webp",
    "/assets/img/dsultan-kering-tempe-testimonial-5.webp",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener('fetch', event => {
    const req = event.request;

    if (/.*(json)$/.test(req.url)) {
        event.respondWith(networkFirst(req));
    } else {
        event.respondWith(cacheFirst(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(req);
    return cachedResponse || networkFirst(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cachedResponse = await cache.match(req);
        return cachedResponse;
    }
}
