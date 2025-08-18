const CACHE_NAME = "happy-daycare-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json",
  "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
];

// 서비스 워커 설치
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("캐시를 열었습니다");
      return cache.addAll(urlsToCache);
    })
  );
});

// 서비스 워커 활성화
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log("이전 캐시를 삭제합니다:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 네트워크 요청 가로채기
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // 캐시에서 찾았으면 반환
      if (response) {
        return response;
      }

      // 네트워크에서 가져오기
      return fetch(event.request).then(function (response) {
        // 유효하지 않은 응답인지 확인
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // 응답을 복사하여 캐시에 저장
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// 푸시 알림 처리 (향후 확장 가능)
self.addEventListener("push", function (event) {
  const options = {
    body: event.data ? event.data.text() : "새로운 소식이 있습니다!",
    icon: "/icon-192x192.png",
    badge: "/badge-72x72.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "확인하기",
        icon: "/check.png",
      },
      {
        action: "close",
        title: "닫기",
        icon: "/close.png",
      },
    ],
  };

  event.waitUntil(
    self.registration.showNotification("행복한 어린이집", options)
  );
});

// 알림 클릭 처리
self.addEventListener("notificationclick", function (event) {
  console.log("알림이 클릭되었습니다:", event.notification.tag);

  event.notification.close();

  event.waitUntil(clients.openWindow("/"));
});
