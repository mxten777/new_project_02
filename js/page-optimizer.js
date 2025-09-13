/**
 * 페이지 최적화 스크립트
 * 성능 향상을 위한 다양한 최적화 기능 제공
 */

// DOM 콘텐츠가 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
  // 애니메이션 요소 초기화
  initAnimations();
  
  // 코드 분할 및 지연 로딩
  initCodeSplitting();
  
  // 폰트 최적화
  optimizeFonts();
  
  // 섹션 가시성 기반 컨텐츠 로딩
  initSectionVisibility();
  
  // 다크 모드 토글 초기화
  initDarkModeToggle();
});

/**
 * 스크롤 애니메이션 초기화
 */
function initAnimations() {
  // IntersectionObserver 지원 확인
  if ('IntersectionObserver' in window) {
    const animateElements = document.querySelectorAll('.animate-fade-in, .section-animate');
    
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 요소가 화면에 들어오면 애니메이션 클래스 추가
          entry.target.classList.add('animate-in');
          
          // 애니메이션을 한 번만 실행하고 싶다면 관찰 중지
          // animationObserver.unobserve(entry.target);
        } else {
          // 요소가 화면에서 나가면 애니메이션 클래스 제거 (선택적)
          // entry.target.classList.remove('animate-in');
        }
      });
    }, {
      // 요소가 20% 이상 보이면 애니메이션 시작
      threshold: 0.2
    });
    
    // 모든 애니메이션 요소 관찰
    animateElements.forEach(element => {
      animationObserver.observe(element);
    });
  } else {
    // IntersectionObserver를 지원하지 않는 브라우저에 대한 폴백
    const animateElements = document.querySelectorAll('.animate-fade-in, .section-animate');
    animateElements.forEach(element => {
      element.classList.add('animate-in');
    });
  }
}

/**
 * 코드 분할 및 지연 로딩 초기화
 */
function initCodeSplitting() {
  // 지연 로딩이 필요한 스크립트 목록
  const deferredScripts = [
    { src: 'js/image-optimizer.js', condition: true },
    { src: 'js/analytics.js', condition: !navigator.doNotTrack },
    { src: 'js/testimonials.js', condition: document.querySelector('testimonial-slider-component') !== null }
  ];
  
  // 조건에 맞는 스크립트만 지연 로딩
  deferredScripts.forEach(script => {
    if (script.condition) {
      loadScript(script.src);
    }
  });
  
  // Font Awesome 아이콘 사용량 분석 및 최적화
  optimizeFontAwesome();
}

/**
 * 스크립트 동적 로딩
 * @param {string} src - 스크립트 소스 경로
 * @returns {Promise} 스크립트 로드 Promise
 */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error: ${src}`));
    
    document.body.appendChild(script);
  });
}

/**
 * Font Awesome 아이콘 최적화
 * 사용하는 아이콘만 로드하는 방식으로 최적화
 */
function optimizeFontAwesome() {
  // 페이지에서 사용 중인 Font Awesome 아이콘 클래스 수집
  const iconElements = document.querySelectorAll('[class*="fa-"]');
  const usedIcons = new Set();
  
  iconElements.forEach(element => {
    const classList = element.className.split(' ');
    classList.forEach(className => {
      if (className.startsWith('fa-') && !className.startsWith('fa-fw') && !className.startsWith('fa-lg')) {
        usedIcons.add(className);
      }
    });
  });
  
  // 사용 중인 아이콘 목록 기록 (실제 최적화는 빌드 과정에서 이루어져야 함)
  console.log('Used Font Awesome icons:', Array.from(usedIcons));
}

/**
 * 폰트 최적화
 */
function optimizeFonts() {
  // 폰트 디스플레이 최적화 (CSS에서도 가능)
  document.fonts.ready.then(() => {
    console.log('All fonts are loaded and ready');
  });
  
  // 필요 시 폰트 서브셋 로딩 로직 추가
}

/**
 * 섹션 가시성 기반 컨텐츠 로딩
 */
function initSectionVisibility() {
  // 섹션별 가시성 관찰
  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('section[id]');
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 섹션이 보이면 필요한 리소스 로드
          const sectionId = entry.target.id;
          loadSectionResources(sectionId);
        }
      });
    }, {
      // 요소가 10% 이상 보이면 로딩 시작
      threshold: 0.1
    });
    
    // 모든 섹션 관찰
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }
}

/**
 * 섹션별 필요 리소스 로딩
 * @param {string} sectionId - 섹션 ID
 */
function loadSectionResources(sectionId) {
  // 섹션별 필요 리소스 매핑
  const sectionResources = {
    'contact': ['js/form-validator.js'],
    'testimonials': ['js/testimonials.js'],
    // 다른 섹션 리소스 추가
  };
  
  // 해당 섹션에 필요한 리소스가 있으면 로드
  if (sectionResources[sectionId]) {
    sectionResources[sectionId].forEach(resource => {
      // 이미 로드된 리소스는 다시 로드하지 않음
      if (!document.querySelector(`script[src="${resource}"]`)) {
        loadScript(resource);
      }
    });
  }
}

/**
 * 다크 모드 토글 초기화
 */
function initDarkModeToggle() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const darkModeIcon = document.getElementById('darkModeIcon');
  
  // 다크 모드 토글 버튼이 존재하는 경우에만 실행
  if (darkModeToggle && darkModeIcon) {
    // 현재 테마 상태 확인
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // 아이콘 업데이트
    updateDarkModeIcon(isDarkMode, darkModeIcon);
    
    // 토글 버튼 클릭 이벤트 리스너
    darkModeToggle.addEventListener('click', () => {
      // 다크 모드 토글
      document.documentElement.classList.toggle('dark');
      
      // 현재 상태 저장
      const newDarkMode = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
      
      // 아이콘 업데이트
      updateDarkModeIcon(newDarkMode, darkModeIcon);
    });
  }
}

/**
 * 다크 모드 아이콘 업데이트
 * @param {boolean} isDarkMode - 다크 모드 여부
 * @param {HTMLElement} iconElement - 아이콘 요소
 */
function updateDarkModeIcon(isDarkMode, iconElement) {
  if (isDarkMode) {
    iconElement.classList.remove('fa-moon');
    iconElement.classList.add('fa-sun');
  } else {
    iconElement.classList.remove('fa-sun');
    iconElement.classList.add('fa-moon');
  }
}