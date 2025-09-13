/**
 * Programs(프로그램) 컴포넌트
 * 교육 프로그램 소개 섹션
 */
class ProgramsComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="programs" class="relative py-20 bg-gradient-to-br from-[#f7fafc] via-[#f5f7fa] to-background dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden section-animate">
        <!-- 상단 곡선 SVG Divider -->
        <div class="absolute -top-1 left-0 w-full overflow-hidden leading-none z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-20">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="url(#programs-top)"/>
            <defs>
              <linearGradient id="programs-top" x1="0" y1="0" x2="1440" y2="80" gradientUnits="userSpaceOnUse">
                <stop stop-color="var(--color-background)"/>
                <stop offset="1" stop-color="var(--color-background-alt)"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="max-w-7xl mx-auto px-4 relative z-20">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-4 text-primary dark:text-yellow-300 drop-shadow-lg tracking-tight">다양한 교육 프로그램</h2>
            <p class="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">아이들의 전인적 성장을 위한 특별한 프로그램들</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 relative">
            <!-- 음악 교육 카드 -->
            <div class="group relative rounded-3xl shadow-2xl border-2 border-primary/20 dark:border-yellow-300/20 bg-gradient-to-br from-primary/90 via-accent/80 to-white/90 dark:from-yellow-300/90 dark:via-yellow-500/80 dark:to-gray-800/90 p-10 pt-16 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl hover:scale-105 animate-fade-in overflow-visible">
              <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent dark:from-yellow-300 dark:to-yellow-500 shadow-lg text-white dark:text-gray-900 text-3xl border-4 border-white dark:border-gray-800 group-hover:scale-110 transition-transform" aria-hidden="true">
                <i class="fas fa-music"></i>
                <span class="sr-only">음악 교육</span>
              </div>
              <h3 class="text-xl font-bold mb-2 text-primary dark:text-yellow-300 drop-shadow">음악 교육</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4 font-medium">리듬감과 음감을 기르는 다양한 음악 활동</p>
              <ul class="text-left text-gray-700 dark:text-gray-300 space-y-1 font-normal">
                <li class="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-primary/70 dark:before:bg-yellow-300/70 before:ring-2 before:ring-accent/60 dark:before:ring-yellow-500/60 before:shadow-md">악기 체험</li>
                <li class="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-primary/70 dark:before:bg-yellow-300/70 before:ring-2 before:ring-accent/60 dark:before:ring-yellow-500/60 before:shadow-md">율동 활동</li>
                <li class="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-primary/70 dark:before:bg-yellow-300/70 before:ring-2 before:ring-accent/60 dark:before:ring-yellow-500/60 before:shadow-md">동요 부르기</li>
              </ul>
            </div>
            <!-- 미술 활동 카드 -->
            <div class="group relative rounded-3xl shadow-2xl border-2 border-secondary/20 dark:border-secondary/20 bg-gradient-to-br from-secondary/90 via-primary/80 to-white/90 dark:from-secondary/90 dark:via-yellow-300/80 dark:to-gray-800/90 p-10 pt-16 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl hover:scale-105 animate-fade-in overflow-visible">
              <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary dark:from-secondary dark:to-yellow-300 shadow-lg text-white dark:text-gray-900 text-3xl border-4 border-white dark:border-gray-800 group-hover:scale-110 transition-transform" aria-hidden="true">
                <i class="fas fa-palette"></i>
                <span class="sr-only">미술 활동</span>
              </div>
              <h3 class="text-xl font-bold mb-2 text-secondary dark:text-secondary drop-shadow">미술 활동</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4 font-medium">창의력과 표현력을 기르는 미술 프로그램</p>
              <ul class="text-left text-gray-700 dark:text-gray-300 space-y-1 font-normal">
                <li class="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-secondary/70 dark:before:bg-secondary/70 before:ring-2 before:ring-primary/60 dark:before:ring-yellow-300/60 before:shadow-md">그리기, 만들기</li>
                <li class="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-secondary/70 dark:before:bg-secondary/70 before:ring-2 before:ring-primary/60 dark:before:ring-yellow-300/60 before:shadow-md">점토 놀이</li>
                <li class="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-secondary/70 dark:before:bg-secondary/70 before:ring-2 before:ring-primary/60 dark:before:ring-yellow-300/60 before:shadow-md">협동 작품 활동</li>
              </ul>
            </div>
            <!-- 체육 활동 카드 -->
            <div class="group relative rounded-3xl shadow-2xl border-2 border-accent/20 dark:border-accent/20 bg-gradient-to-br from-accent/90 via-primary/80 to-white/90 dark:from-accent/90 dark:via-yellow-300/80 dark:to-gray-800/90 p-10 pt-16 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl hover:scale-105 animate-fade-in overflow-visible">
              <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary dark:from-accent dark:to-yellow-300 shadow-lg text-white dark:text-gray-900 text-3xl border-4 border-white dark:border-gray-800 group-hover:scale-110 transition-transform" aria-hidden="true">
                <i class="fas fa-running"></i>
                <span class="sr-only">체육 활동</span>
              </div>
              <h3 class="text-xl font-bold mb-2 text-accent dark:text-accent drop-shadow">체육 활동</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4 font-medium">건강한 신체 발달을 위한 체육 프로그램</p>
              <ul class="text-left text-gray-700 dark:text-gray-300 space-y-1 font-normal">
                <li class="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-accent/70 dark:before:bg-accent/70 before:ring-2 before:ring-primary/60 dark:before:ring-yellow-300/60 before:shadow-md">실내외 놀이</li>
                <li class="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-accent/70 dark:before:bg-accent/70 before:ring-2 before:ring-primary/60 dark:before:ring-yellow-300/60 before:shadow-md">체조, 율동</li>
                <li class="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-accent/70 dark:before:bg-accent/70 before:ring-2 before:ring-primary/60 dark:before:ring-yellow-300/60 before:shadow-md">소근육 발달 놀이</li>
              </ul>
            </div>
            <!-- 언어 교육 카드 -->
            <div class="group relative rounded-3xl shadow-2xl border-2 border-primary/20 dark:border-yellow-300/20 bg-gradient-to-br from-primary/90 via-secondary/80 to-white/90 dark:from-yellow-300/90 dark:via-secondary/80 dark:to-gray-800/90 p-10 pt-16 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl hover:scale-105 animate-fade-in overflow-visible">
              <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary dark:from-secondary dark:to-yellow-300 shadow-lg text-white dark:text-gray-900 text-3xl border-4 border-white dark:border-gray-800 group-hover:scale-110 transition-transform" aria-hidden="true">
                <i class="fas fa-book"></i>
                <span class="sr-only">언어 교육</span>
              </div>
              <h3 class="text-xl font-bold mb-2 text-secondary dark:text-secondary drop-shadow">언어 교육</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4 font-medium">의사소통 능력과 언어 발달을 돕는 프로그램</p>
              <ul class="text-left text-gray-700 dark:text-gray-300 space-y-1 font-normal">
                <li class="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-secondary/70 dark:before:bg-secondary/70 before:ring-2 before:ring-primary/60 dark:before:ring-yellow-300/60 before:shadow-md">동화 읽기</li>
                <li class="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-secondary/70 dark:before:bg-secondary/70 before:ring-2 before:ring-primary/60 dark:before:ring-yellow-300/60 before:shadow-md">말하기 연습</li>
                <li class="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-secondary/70 dark:before:bg-secondary/70 before:ring-2 before:ring-primary/60 dark:before:ring-yellow-300/60 before:shadow-md">한글 익히기</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 배경 장식 효과 및 하단 SVG Divider -->
        <div class="pointer-events-none absolute inset-0 z-0">
          <div class="absolute left-1/4 top-1/3 w-72 h-72 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl"></div>
          <div class="absolute right-1/5 bottom-1/4 w-80 h-80 bg-primary/10 dark:bg-primary/5 rounded-full blur-2xl"></div>
        </div>
        <div class="absolute -bottom-1 left-0 w-full overflow-hidden leading-none z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-20">
            <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="url(#programs-bottom)"/>
            <defs>
              <linearGradient id="programs-bottom" x1="0" y1="0" x2="1440" y2="80" gradientUnits="userSpaceOnUse">
                <stop stop-color="var(--color-background-alt)"/>
                <stop offset="1" stop-color="var(--color-background)"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    `;
  }
}

customElements.define('programs-component', ProgramsComponent);