/**
 * 고급 애니메이션 및 상호작용 효과
 * 스크롤 시 요소들이 자연스럽게 나타나는 효과와 마이크로인터랙션을 추가
 */

document.addEventListener('DOMContentLoaded', () => {
  // 스크롤 관찰자 설정 - 더 섬세한 애니메이션을 위한 옵션
  const scrollObserverOptions = {
    root: null, // viewport를 root로 사용
    rootMargin: '0px',
    threshold: buildThresholdList() // 0부터 1까지 더 세밀한 threshold 배열
  };

  // 섹션별 스크롤 애니메이션 관찰자
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 요소가 화면에 들어올 때
      if (entry.isIntersecting) {
        const ratio = Math.min(1, Math.max(0, entry.intersectionRatio));
        
        // 진입 비율에 따라 애니메이션 강도 조절
        entry.target.style.opacity = Math.min(1, ratio * 1.5); // 빠르게 나타나도록 1.5 곱함
        entry.target.style.transform = `translateY(${20 - (ratio * 20)}px)`; // 20px에서 0px로 이동
        
        // 특정 비율 이상으로 보일 때 애니메이션 클래스 추가
        if (ratio > 0.2) {
          entry.target.classList.add('animated');
          
          // 자식 요소들에 시차를 두고 애니메이션 적용
          const children = entry.target.querySelectorAll('.animate-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animated');
            }, 100 * (index + 1)); // 각 요소마다 100ms 지연
          });
        }
      }
    });
  }, scrollObserverOptions);

  // 숫자 카운터 애니메이션 관찰자
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.target);
        const duration = parseInt(counter.dataset.duration || 2000);
        
        animateCounter(counter, target, duration);
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  // 페럴랙스 효과 관찰자 (배경이 다른 속도로 움직이는 효과)
  const parallaxObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 스크롤 이벤트에 연결
        window.addEventListener('scroll', () => {
          const scrollPos = window.scrollY;
          const element = entry.target;
          const speed = parseFloat(element.dataset.parallaxSpeed || 0.2);
          
          // 요소의 위치 계산하여 변환 적용
          const elementPos = element.getBoundingClientRect().top + scrollPos;
          const distance = scrollPos - elementPos;
          element.style.transform = `translateY(${distance * speed}px)`;
        });
      }
    });
  }, { threshold: 0.1 });

  // 애니메이션 대상 요소들에 관찰자 연결
  document.querySelectorAll('.section-animate, h2, .feature-card, .program-card, .teacher-card, .facility-item, .testimonial-card')
    .forEach(element => sectionObserver.observe(element));

  // 숫자 카운터 요소들에 관찰자 연결
  document.querySelectorAll('[data-counter="true"]')
    .forEach(element => counterObserver.observe(element));

  // 패럴랙스 효과 요소들에 관찰자 연결
  document.querySelectorAll('[data-parallax="true"]')
    .forEach(element => parallaxObserver.observe(element));

  // 이미지 요소에 hover 효과 추가
  document.querySelectorAll('.hover-zoom')
    .forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.05)';
        element.style.transition = 'transform 0.3s ease';
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
      });
    });
  
  // 헤더 메뉴 항목에 호버 효과 추가
  document.querySelectorAll('.nav-menu a')
    .forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.classList.add('nav-hover');
      });
      
      link.addEventListener('mouseleave', () => {
        link.classList.remove('nav-hover');
      });
    });
});

// 세밀한 threshold 배열 생성 (0부터 1까지 20단계)
function buildThresholdList() {
  const thresholds = [];
  const numSteps = 20;
  
  for (let i = 1; i <= numSteps; i++) {
    const ratio = i / numSteps;
    thresholds.push(ratio);
  }
  
  return thresholds;
}

// 숫자 카운터 애니메이션
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start).toLocaleString();
    
    if (start >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    }
  }, 16);
}