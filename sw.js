// 서비스 워커 버전 (변경 시 새로운 서비스 워커 설치)
const CACHE_VERSION = 'v1.3.0';
const CACHE_NAME = `aitrak-cache-${CACHE_VERSION}`;

// 즉시 캐싱할 정적 리소스 목록
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/index-modular.html',
  '/dist/output.css',
  '/styles.css',
  '/animations.css',
  '/optimization.css',
  '/script.js',
  '/js/page-optimizer.js',
  '/js/image-optimizer.js',
  '/components/component-manager.js',
  '/components/header-component.js',
  '/components/hero-component.js',
  '/components/about-component.js',
  '/components/programs-component.js',
  '/components/teachers-component.js',
  '/components/facilities-component.js',
  '/components/testimonial-slider-component.js',
  '/components/contact-component.js',
  '/components/footer-component.js',
  '/image/sample_img_03.jpg',
  '/image/20240909_05.jpg',
  '/image/pinterest_29.jpg',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// 런타임에 캐싱할 동적 리소스 패턴
const DYNAMIC_CACHE_PATTERNS = [
  /^https:\/\/fonts\.gstatic\.com\//,
  /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome\//
];

// 설치 이벤트: 정적 리소스 캐싱
self.addEventListener('install', function(event) {
  console.log('Service Worker 설치 중...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Static 리소스 캐싱 중...');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(function() {
        // 대기 없이 즉시 활성화하기 위해 스킵
        return self.skipWaiting();
      })
  );
});

// 활성화 이벤트: 이전 캐시 삭제
self.addEventListener('activate', function(event) {
  console.log('Service Worker 활성화 중...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // 현재 버전이 아닌 캐시 삭제
          return cacheName.startsWith('aitrak-cache-') && cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          console.log('이전 캐시 삭제:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(function() {
      // 활성화 후 모든 클라이언트에 대해 제어권 획득
      return self.clients.claim();
    })
  );
});

// 동적 리소스인지 확인하는 함수
function isDynamicCacheable(url) {
  return DYNAMIC_CACHE_PATTERNS.some(pattern => pattern.test(url));
}

// 네트워크 요청 처리
self.addEventListener('fetch', function(event) {
  const requestUrl = new URL(event.request.url);
  
  // 브라우저 API 요청은 네트워크로 직접 전달
  if (requestUrl.pathname.startsWith('/browser-sync/')) {
    return;
  }
  
  // API 요청 등 동적 데이터는 네트워크 우선 처리
  if (requestUrl.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request)
        .catch(function() {
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // 이미지 최적화: 이미지 요청은 캐시 우선, 실패 시 네트워크, 성공 시 캐시 업데이트
  if (requestUrl.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // 캐시에 있으면 캐시 응답
          if (response) {
            return response;
          }
          
          // 네트워크 요청
          return fetch(event.request)
            .then(function(networkResponse) {
              // 유효한 응답이 아니면 그대로 반환
              if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                return networkResponse;
              }
              
              // 응답 복제 후 캐시에 저장
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
                
              return networkResponse;
            });
        })
    );
    return;
  }
  
  // 일반 정적 리소스: 캐시 우선, 실패 시 네트워크
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // 캐시에 있으면 반환
        if (response) {
          return response;
        }
        
        // 네트워크 요청
        return fetch(event.request)
          .then(function(networkResponse) {
            // 유효한 응답이 아니면 그대로 반환
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }
            
            // 동적 캐싱 대상인 경우 캐시에 저장
            if (isDynamicCacheable(event.request.url)) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
            }
            
            return networkResponse;
          })
          .catch(function(error) {
            // 오프라인 폴백 페이지 제공
            if (event.request.mode === 'navigate') {
              return caches.match('/');
            }
            
            console.error('Fetch 실패:', error);
            return new Response('오프라인 상태입니다', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// 푸시 알림 처리
self.addEventListener("push", function (event) {
  const options = {
    body: event.data ? event.data.text() : "새로운 소식이 있습니다!",
    icon: "/icons/icon-192x192.png",
    badge: "/icons/badge-72x72.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "확인하기",
        icon: "/icons/check.png",
      },
      {
        action: "close",
        title: "닫기",
        icon: "/icons/close.png",
      },
    ],
  };

  event.waitUntil(
    self.registration.showNotification("아이뜨락 어린이집", options)
  );
});