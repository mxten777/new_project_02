/**
 * 테스티모니얼 슬라이더 기능
 * 후기 슬라이더 기능을 처리하는 스크립트
 */
document.addEventListener('DOMContentLoaded', function() {
  initTestimonialSlider();
});

function initTestimonialSlider() {
  const slider = document.querySelector('.testimonial-slider');
  if (!slider) return;
  
  const track = slider.querySelector('.testimonial-track');
  const slides = slider.querySelectorAll('.testimonial-slide');
  const prevButton = slider.querySelector('.testimonial-prev');
  const nextButton = slider.querySelector('.testimonial-next');
  const dotsContainer = slider.querySelector('.testimonial-dots');
  
  if (!track || !slides.length) return;
  
  let currentIndex = 0;
  const slideCount = slides.length;
  
  // 슬라이더 초기 설정
  function setupSlider() {
    // 슬라이드 너비 설정
    slides.forEach(slide => {
      slide.style.minWidth = '100%';
      slide.setAttribute('aria-hidden', 'true');
    });
    
    // 첫 번째 슬라이드 활성화
    slides[0].setAttribute('aria-hidden', 'false');
    
    // Dot 내비게이션 생성
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('w-3', 'h-3', 'rounded-full', 'bg-gray-300', 'dark:bg-gray-600', 'hover:bg-primary', 'dark:hover:bg-yellow-300', 'transition-colors');
      dot.setAttribute('aria-label', `슬라이드 ${index + 1}로 이동`);
      
      if (index === 0) {
        dot.classList.add('bg-primary', 'dark:bg-yellow-300');
      }
      
      dot.addEventListener('click', () => {
        goToSlide(index);
      });
      
      dotsContainer.appendChild(dot);
    });
    
    // 반응형 처리를 위한 리사이즈 이벤트
    window.addEventListener('resize', () => {
      updateSliderPosition();
    });
  }
  
  // 특정 슬라이드로 이동
  function goToSlide(index) {
    if (index < 0) {
      index = slideCount - 1;
    } else if (index >= slideCount) {
      index = 0;
    }
    
    currentIndex = index;
    updateSliderPosition();
    updateDots();
    updateAriaAttributes();
  }
  
  // 슬라이더 위치 업데이트
  function updateSliderPosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  // Dot 내비게이션 업데이트
  function updateDots() {
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('bg-primary', 'dark:bg-yellow-300');
        dot.classList.remove('bg-gray-300', 'dark:bg-gray-600');
      } else {
        dot.classList.remove('bg-primary', 'dark:bg-yellow-300');
        dot.classList.add('bg-gray-300', 'dark:bg-gray-600');
      }
    });
  }
  
  // ARIA 속성 업데이트 (접근성)
  function updateAriaAttributes() {
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.setAttribute('aria-hidden', 'false');
      } else {
        slide.setAttribute('aria-hidden', 'true');
      }
    });
  }
  
  // 이벤트 리스너 설정
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  }
  
  // 자동 슬라이드 설정 (5초마다)
  let autoSlideInterval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 5000);
  
  // 사용자 상호작용 시 자동 슬라이드 일시 정지 및 재개
  slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });
  
  slider.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
  });
  
  // 터치 슬라이드 지원
  let touchStartX = 0;
  let touchEndX = 0;
  
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const threshold = 50; // 스와이프 감지 임계값
    if (touchStartX - touchEndX > threshold) {
      // 왼쪽으로 스와이프
      goToSlide(currentIndex + 1);
    } else if (touchEndX - touchStartX > threshold) {
      // 오른쪽으로 스와이프
      goToSlide(currentIndex - 1);
    }
  }
  
  // 키보드 접근성 지원
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      goToSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      goToSlide(currentIndex + 1);
    }
  });
  
  // 슬라이더 초기화
  setupSlider();
}