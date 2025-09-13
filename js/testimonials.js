/**
 * 테스티모니얼 슬라이더 관리 스크립트
 */

document.addEventListener('DOMContentLoaded', () => {
  initTestimonials();
});

function initTestimonials() {
  const sliders = document.querySelectorAll('.testimonial-slider');
  
  sliders.forEach(slider => {
    const track = slider.querySelector('.testimonial-track');
    const slides = slider.querySelectorAll('.testimonial-slide');
    const dotsContainer = slider.querySelector('.testimonial-dots');
    const prevBtn = slider.querySelector('.testimonial-prev');
    const nextBtn = slider.querySelector('.testimonial-next');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // 슬라이더 너비 설정
    function setSlideWidth() {
      const sliderWidth = slider.clientWidth;
      slides.forEach(slide => {
        slide.style.minWidth = `${sliderWidth}px`;
      });
      updateTrackPosition();
    }
    
    // 트랙 위치 업데이트
    function updateTrackPosition() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // 활성 도트 표시
      const dots = dotsContainer.querySelectorAll('.testimonial-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }
    
    // 네비게이션 도트 생성
    function createDots() {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('button');
        dot.classList.add('testimonial-dot', 'w-3', 'h-3', 'rounded-full', 'bg-gray-300', 'dark:bg-gray-600');
        if (i === currentIndex) {
          dot.classList.add('active', 'bg-primary', 'dark:bg-yellow-300');
        }
        
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateTrackPosition();
        });
        
        dotsContainer.appendChild(dot);
      }
    }
    
    // 네비게이션 버튼 이벤트 리스너
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateTrackPosition();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateTrackPosition();
      });
    }
    
    // 자동 슬라이드
    let autoSlideInterval;
    
    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateTrackPosition();
      }, 5000); // 5초마다 슬라이드 변경
    }
    
    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }
    
    // 마우스 이벤트로 자동 슬라이드 제어
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    
    // 터치 이벤트 추가
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
      stopAutoSlide();
    }, { passive: true });
    
    slider.addEventListener('touchmove', e => {
      touchEndX = e.touches[0].clientX;
    }, { passive: true });
    
    slider.addEventListener('touchend', () => {
      const diff = touchStartX - touchEndX;
      const threshold = 50; // 스와이프 임계값
      
      if (diff > threshold) {
        // 왼쪽 스와이프
        currentIndex = (currentIndex + 1) % slideCount;
      } else if (diff < -threshold) {
        // 오른쪽 스와이프
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      }
      
      updateTrackPosition();
      startAutoSlide();
    });
    
    // 초기화
    createDots();
    setSlideWidth();
    startAutoSlide();
    
    // 화면 크기 변경 시 슬라이드 너비 재조정
    window.addEventListener('resize', setSlideWidth);
  });
}

// CSS 스타일 주입
function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .testimonial-track {
      width: 100%;
      display: flex;
      transition: transform 0.5s ease;
    }
    
    .testimonial-slide {
      flex: 0 0 100%;
      scroll-snap-align: start;
    }
    
    .testimonial-dot.active {
      transform: scale(1.3);
    }
  `;
  document.head.appendChild(style);
}

injectStyles();