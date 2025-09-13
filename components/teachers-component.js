/**
 * 선생님 컴포넌트
 * 교사진 소개 및 정보
 */
class TeachersComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="teachers" class="relative py-20 bg-white overflow-hidden section-animate">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">믿을 수 있는 선생님들</h2>
          <p class="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">아이들을 사랑하는 마음으로 최선을 다하는 전문 교사진</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div class="rounded-xl shadow-lg border border-secondary/10 bg-gradient-to-br from-secondary/95 to-primary/95 text-white backdrop-blur p-8 text-center transition hover:-translate-y-2 hover:shadow-2xl">
            <div class="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/20 text-4xl" aria-hidden="true">
              <i class="fas fa-user-tie"></i>
              <span class="sr-only">원장</span>
            </div>
            <h3 class="text-xl font-bold mb-1">김원장님</h3>
            <p class="text-base font-semibold mb-1">원장</p>
            <p class="text-sm mb-1">보육경력 15년</p>
            <p class="text-sm opacity-80">유아교육과 졸업, 보육교사 1급 자격증</p>
          </div>
          <div class="rounded-xl shadow-lg border border-secondary/10 bg-gradient-to-br from-primary/90 to-secondary/90 text-white backdrop-blur p-8 text-center transition hover:-translate-y-2 hover:shadow-2xl">
            <div class="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/20 text-4xl" aria-hidden="true">
              <i class="fas fa-user"></i>
              <span class="sr-only">담임 선생님</span>
            </div>
            <h3 class="text-xl font-bold mb-1">이선생님</h3>
            <p class="text-base font-semibold mb-1">만 5세 담임</p>
            <p class="text-sm mb-1">보육경력 10년</p>
            <p class="text-sm opacity-80">아동학과 졸업, 보육교사 1급 자격증</p>
          </div>
          <div class="rounded-xl shadow-lg border border-secondary/10 bg-gradient-to-br from-secondary/90 to-primary/90 text-white backdrop-blur p-8 text-center transition hover:-translate-y-2 hover:shadow-2xl">
            <div class="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/20 text-4xl" aria-hidden="true">
              <i class="fas fa-user"></i>
              <span class="sr-only">담임 선생님</span>
            </div>
            <h3 class="text-xl font-bold mb-1">박선생님</h3>
            <p class="text-base font-semibold mb-1">만 4세 담임</p>
            <p class="text-sm mb-1">보육경력 8년</p>
            <p class="text-sm opacity-80">유아교육과 졸업, 보육교사 2급 자격증</p>
          </div>
        </div>
      </div>
      <!-- 배경 장식 효과 -->
      <div class="pointer-events-none absolute inset-0 z-0">
        <div class="absolute left-1/4 top-1/3 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div class="absolute right-1/5 bottom-1/4 w-80 h-80 bg-primary/10 rounded-full blur-2xl"></div>
      </div>
    </section>
    `;
  }
}

customElements.define('teachers-component', TeachersComponent);