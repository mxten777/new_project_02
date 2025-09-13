/**
 * 컴포넌트 매니저
 * 모든 웹 컴포넌트들을 로드하고 관리하는 중앙 파일
 */

// 컴포넌트 불러오기
import './header-component.js';
import './hero-component.js';
import './about-component.js';
import './programs-component.js';
import './teachers-component.js';
import './facilities-component.js';
import './testimonial-slider-component.js';
import './contact-component.js';
import './footer-component.js';

// 다크모드 관리
document.addEventListener('DOMContentLoaded', () => {
  // 시스템 다크모드 감지
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  // 초기 테마 설정 (저장된 값 또는 시스템 기본값)
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
    document.documentElement.classList.add('dark');
    updateDarkModeIcon(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateDarkModeIcon(false);
  }
  
  // 다크모드 토글 버튼 이벤트 설정
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
  
  // CSS 변수 설정 (다크모드 대응)
  updateCSSVariables();
});

// 다크모드 토글 기능
function toggleDarkMode() {
  const isDarkMode = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  updateDarkModeIcon(isDarkMode);
  updateCSSVariables();
}

// 다크모드 아이콘 업데이트
function updateDarkModeIcon(isDarkMode) {
  const icon = document.getElementById('darkModeIcon');
  if (icon) {
    icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// CSS 변수 업데이트 (다크모드 대응)
function updateCSSVariables() {
  const isDarkMode = document.documentElement.classList.contains('dark');
  document.documentElement.style.setProperty('--color-background', isDarkMode ? '#111827' : '#ffffff');
  document.documentElement.style.setProperty('--color-background-alt', isDarkMode ? '#1f2937' : '#f8f9fa');
}

// 레이아웃 관련 공통 기능 설정
document.addEventListener('DOMContentLoaded', () => {
  // 스크롤에 따른 헤더 스타일 변경
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
});