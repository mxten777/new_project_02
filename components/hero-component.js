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
      <section id="hero" class="relative min-h-[90vh] bg-gradient-to-r from-[#fff5f7] to-[#f0f9ff] dark:from-gray-900 dark:to-gray-800 flex items-center overflow-hidden py-20 lg:py-0">
        <div class="container mx-auto px-4 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 animate-fade-in" style="animation-delay: 0.2s">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-gray-900 dark:text-white">
                <span class="text-accent">사랑</span>과 <span class="text-primary dark:text-yellow-300">성장</span>이<br />
                함께하는 어린이집
              </h1>
              <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium">
                아이뜨락 어린이집은 아이들의 호기심과 창의력을 북돋워<br class="hidden md:block" />
                행복한 미래를 준비하는 특별한 공간입니다.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href="#programs" class="btn btn-primary py-3 px-8 rounded-full font-bold text-white hover:shadow-lg hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary">
                  프로그램 살펴보기
                </a>
                <a href="#contact" class="btn btn-primary py-3 px-8 rounded-full font-bold text-white hover:shadow-lg hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary">
                  상담 신청하기
                </a>
              </div>
            </div>
            <div class="order-1 lg:order-2 animate-fade-in" style="animation-delay: 0.4s">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6 dark:from-primary/10 dark:to-accent/10"></div>
                <img 
                  src="/image/baikal_logo.png" 
                  alt="바이칼 로고" 
                  class="rounded-3xl shadow-xl relative z-10 transform hover:scale-[1.02] transition duration-500"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- 장식용 배경 패턴 -->
        <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl"></div>
      </section>
    `;
  }
}

customElements.define('hero-component', HeroComponent);