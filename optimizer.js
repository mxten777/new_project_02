// 성능 최적화를 위한 유틸리티 기능

/**
 * 리소스 우선순위 설정
 * 중요 리소스는 빠르게 로드하고 비핵심 리소스는 지연 로드합니다.
 */
class ResourceOptimizer {
  constructor() {
    this.initiated = false;
    this.loadEvents = [];
  }

  /**
   * 이미지 최적화 및 지연 로딩 설정
   */
  setupImageOptimization() {
    // 기존 이미지에 data-src 속성 추가
    document.querySelectorAll('img:not([data-src])').forEach(img => {
      // 이미 data-src가 있거나 preload된 이미지는 건너뜀
      if (!img.dataset.src && !img.hasAttribute('preload')) {
        const originalSrc = img.src;
        if (originalSrc && !originalSrc.startsWith('data:')) {
          img.dataset.src = originalSrc;
          img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
          img.classList.add('lazy');
        }
      }
    });

    // 현재 화면에 있는 이미지는 즉시 로드
    this.lazyLoadImagesInViewport();
    
    // 스크롤 시 지연 로딩 처리
    this.setupLazyLoading();
  }

  /**
   * 뷰포트 내 이미지 즉시 로드
   */
  lazyLoadImagesInViewport() {
    const viewportImages = Array.from(document.querySelectorAll('img.lazy'))
      .filter(img => this.isInViewport(img));
    
    viewportImages.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      }
    });
  }

  /**
   * 지연 로딩 설정
   */
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
      });
    } else {
      // 폴백: 구형 브라우저에서 스크롤 이벤트로 처리
      this.setupLegacyLazyLoading();
    }
  }

  /**
   * 구형 브라우저용 지연 로딩
   */
  setupLegacyLazyLoading() {
    let lazyLoadThrottleTimeout;
    
    const lazyLoad = () => {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }

      lazyLoadThrottleTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset;
        document.querySelectorAll('img.lazy').forEach(img => {
          if (img.offsetTop < (window.innerHeight + scrollTop + 500)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (document.querySelectorAll('img.lazy').length == 0) { 
          document.removeEventListener('scroll', lazyLoad);
          window.removeEventListener('resize', lazyLoad);
          window.removeEventListener('orientationChange', lazyLoad);
        }
      }, 20);
    };

    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationChange', lazyLoad);
  }

  /**
   * CSS 및 JS 리소스 최적화
   */
  optimizeResourceLoading() {
    // 비핵심 CSS 지연 로드
    this.deferNonCriticalCSS();
    
    // 비핵심 JS 지연 로드
    this.deferNonCriticalJS();
  }

  /**
   * 비핵심 CSS 지연 로드
   */
  deferNonCriticalCSS() {
    document.querySelectorAll('link[rel="stylesheet"][data-defer="true"]').forEach(link => {
      link.setAttribute('media', 'print');
      link.setAttribute('onload', "this.media='all'");
    });
  }

  /**
   * 비핵심 JS 지연 로드
   */
  deferNonCriticalJS() {
    document.querySelectorAll('script[data-defer="true"]').forEach(script => {
      script.setAttribute('defer', '');
    });
  }

  /**
   * 폰트 최적화
   */
  optimizeFonts() {
    // 폰트 디스플레이 설정
    const fontStyle = document.createElement('style');
    fontStyle.textContent = `
      @font-face {
        font-display: swap;
      }
    `;
    document.head.appendChild(fontStyle);
    
    // 폰트 지연 로드
    document.querySelectorAll('link[rel="stylesheet"][href*="fonts.googleapis.com"]').forEach(link => {
      link.setAttribute('media', 'print');
      link.setAttribute('onload', "this.media='all'");
    });
  }

  /**
   * 뷰포트에 엘리먼트가 있는지 확인
   */
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  /**
   * 성능 메트릭 기록
   */
  trackPerformanceMetrics() {
    if ('performance' in window && 'PerformanceObserver' in window) {
      // LCP (Largest Contentful Paint) 측정
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime, 'Element:', lastEntry.element);
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // FID (First Input Delay) 측정
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ type: 'first-input', buffered: true });

      // CLS (Cumulative Layout Shift) 측정
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsValue = 0;
        entryList.getEntries().forEach(entry => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    }
  }

  /**
   * 모든 최적화 설정 실행
   */
  init() {
    if (this.initiated) return;
    
    // 문서 준비 상태 확인
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.runOptimizations());
    } else {
      this.runOptimizations();
    }
    
    this.initiated = true;
  }

  /**
   * 모든 최적화 설정 실행
   */
  runOptimizations() {
    // 이미지 최적화
    this.setupImageOptimization();
    
    // 리소스 최적화
    this.optimizeResourceLoading();
    
    // 폰트 최적화
    this.optimizeFonts();
    
    // 성능 측정
    this.trackPerformanceMetrics();
    
    // onload 이벤트 실행
    window.addEventListener('load', () => {
      // 지연 로드할 추가 리소스
      this.loadEvents.forEach(fn => fn());
    });
    
    console.log('🚀 성능 최적화 설정 완료');
  }

  /**
   * 로드 후 실행할 함수 추가
   */
  addLoadEvent(fn) {
    this.loadEvents.push(fn);
  }
}

// 인스턴스 생성 및 초기화
const optimizer = new ResourceOptimizer();
optimizer.init();

// 추가 지연 로드 스크립트
optimizer.addLoadEvent(() => {
  // 사용자 상호작용 후 로드될 비핵심 요소들
  console.log('페이지 로드 완료 후 추가 리소스 로드');
});

// 외부로 노출
window.optimizer = optimizer;