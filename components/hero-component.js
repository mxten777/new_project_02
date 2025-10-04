/**
 * 히어로 섹션 컴포넌트
 * 웹사이트의 메인 소개 영역
 */
class HeroComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="hero" class="relative flex items-center justify-center min-h-screen mt-16 md:mt-20 bg-gradient-to-r from-[#fff5f7] to-[#f0f9ff] dark:from-gray-900 dark:to-gray-800 py-12 md:py-16 px-4">
        <div class="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-6 md:gap-8 relative z-20">
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-white animate-fade-in" style="animation-delay:0.2s">
            <span class="text-accent">사랑</span>과 <span class="text-primary dark:text-yellow-300">성장</span>이<br />함께하는 어린이집
          </h1>
          <p class="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed font-medium animate-fade-in px-4 md:px-0" style="animation-delay:0.3s">
            아이뜨락 어린이집은 아이들의 호기심과 창의력을 북돋워<br class="hidden md:block" />행복한 미래를 준비하는 특별한 공간입니다.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center animate-fade-in w-full max-w-md md:max-w-none" style="animation-delay:0.4s">
            <a href="#programs" class="btn btn-primary py-3 px-6 md:px-8 rounded-full font-bold text-white hover:shadow-lg hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base w-full sm:w-auto">
              프로그램 살펴보기
            </a>
            <a href="#contact" class="btn btn-primary py-3 px-6 md:px-8 rounded-full font-bold text-white hover:shadow-lg hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base w-full sm:w-auto">
              상담 신청하기
            </a>
          </div>
        </div>
        
        <!-- 장식용 배경 패턴 -->
        <div class="absolute top-0 right-0 w-80 h-80 bg-primary/5 dark:bg-primary/3 rounded-full blur-3xl opacity-60"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 dark:bg-accent/3 rounded-full blur-3xl opacity-60"></div>
      </section>
    `;
  }
}

customElements.define('hero-component', HeroComponent);