/**
 * 이미지 최적화 유틸리티
 * WebP 변환 및 레이지 로딩 지원
 */

// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
  // 이미지 레이지 로딩 초기화
  initLazyLoading();
  
  // 이미지 WebP 지원 확인 및 최적화
  checkWebPSupport().then(supported => {
    if (supported) {
      convertImagesToWebP();
    }
  });
});

/**
 * 브라우저의 WebP 지원 여부를 확인
 * @returns {Promise<boolean>} WebP 지원 여부
 */
function checkWebPSupport() {
  return new Promise(resolve => {
    const webpImage = new Image();
    
    webpImage.onload = function() {
      const result = (webpImage.width > 0) && (webpImage.height > 0);
      resolve(result);
    };
    
    webpImage.onerror = function() {
      resolve(false);
    };
    
    webpImage.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
  });
}

/**
 * 페이지 내 이미지를 WebP로 변환
 */
function convertImagesToWebP() {
  const images = document.querySelectorAll('img:not([data-no-webp])');
  
  images.forEach(img => {
    const currentSrc = img.src;
    
    // 이미 WebP인 경우 스킵
    if (currentSrc.endsWith('.webp')) return;
    
    // 이미지 URL 패턴 확인 (로컬 이미지만 변환)
    if (currentSrc.match(/\.(jpe?g|png)($|\?)/i)) {
      // WebP 이미지 생성 경로
      const webpSrc = currentSrc.replace(/\.(jpe?g|png)($|\?)/i, '.webp$2');
      
      // WebP 이미지 존재 여부 확인 후 교체
      checkImageExists(webpSrc).then(exists => {
        if (exists) {
          img.src = webpSrc;
          
          // 데이터 속성에 원본 소스 저장
          img.setAttribute('data-original-src', currentSrc);
        }
      });
    }
  });
}

/**
 * 이미지 URL이 유효한지 확인
 * @param {string} url - 확인할 이미지 URL
 * @returns {Promise<boolean>} 이미지 존재 여부
 */
function checkImageExists(url) {
  return new Promise(resolve => {
    const img = new Image();
    
    img.onload = function() {
      resolve(true);
    };
    
    img.onerror = function() {
      resolve(false);
    };
    
    img.src = url;
  });
}

/**
 * 이미지 레이지 로딩 초기화
 */
function initLazyLoading() {
  // IntersectionObserver 지원 확인
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          
          // 이미지가 로드된 후 data-src 속성 제거
          img.onload = function() {
            img.removeAttribute('data-src');
          };
          
          // 더 이상 관찰하지 않음
          observer.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // IntersectionObserver를 지원하지 않는 브라우저를 위한 폴백
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    function lazyLoad() {
      lazyImages.forEach(img => {
        if (img.getBoundingClientRect().top <= window.innerHeight && img.getBoundingClientRect().bottom >= 0 && getComputedStyle(img).display !== 'none') {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
      });
    }
    
    // 초기 로드 및 스크롤 이벤트에 연결
    lazyLoad();
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
  }
}

/**
 * 이미지를 WebP로 변환하는 유틸리티 함수
 * 서버에서 이미지 변환 시 사용할 수 있는 참조 코드
 * 실제 변환은 서버에서 이루어져야 함
 */
function imageToWebP(imageFile, quality = 80) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      
      // Canvas를 WebP로 변환
      canvas.toBlob(blob => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('WebP 변환 실패'));
        }
      }, 'image/webp', quality / 100);
    };
    
    img.onerror = function() {
      reject(new Error('이미지 로드 실패'));
    };
    
    // FileReader를 사용하여 이미지 파일 로드
    const reader = new FileReader();
    reader.onload = function(e) {
      img.src = e.target.result;
    };
    reader.onerror = function() {
      reject(new Error('파일 읽기 실패'));
    };
    reader.readAsDataURL(imageFile);
  });
}