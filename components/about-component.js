/**
 * About(소개) 컴포넌트
 * 어린이집 소개 섹션
 */
class AboutComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="about" class="relative py-20 bg-gradient-to-br from-white via-[#fafbff] to-background overflow-hidden">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white flex items-center justify-center gap-3">
              <span><i class="fas fa-seedling text-accent text-4xl"></i></span>
              아이뜨락 어린이집을 소개합니다
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">2015년 개원 이래 800여 명의 아이들과 함께 성장해온 신뢰받는 어린이집입니다</p>
          </div>
          <!-- 대표 이미지 갤러리 -->
          <div class="mb-12 flex flex-col md:flex-row gap-8 items-center justify-center" role="group" aria-label="소개 대표 이미지 갤러리">
            <img src="/image/20240909_05.jpg" alt="어린이집 환경" class="w-64 h-48 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
            <img src="/image/pinterest_29.jpg" alt="교육 활동" class="w-64 h-48 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="space-y-6">
                <!-- 교육 철학 -->
                <div class="flex items-start bg-background dark:bg-gray-800 rounded-xl border-l-4 border-accent dark:border-yellow-300 p-6 mb-2">
                  <div class="w-14 h-14 flex items-center justify-center rounded-full bg-accent dark:bg-yellow-300 text-white dark:text-gray-900 text-2xl mr-6 flex-shrink-0" aria-hidden="true">
                    <i class="fas fa-child"></i>
                    <span class="sr-only">교육 철학</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold mb-1 text-gray-800 dark:text-white">교육 철학</h4>
                    <p class="text-gray-600 dark:text-gray-300">아이 한 명, 한 명의 개성과 가능성을 존중하며, 사랑과 신뢰로 성장의 기반을 마련합니다.</p>
                  </div>
                </div>
                <!-- 원장 인사말 -->
                <div class="flex items-start bg-background dark:bg-gray-800 rounded-xl border-l-4 border-primary dark:border-yellow-300 p-6 mb-2">
                  <div class="w-14 h-14 flex items-center justify-center rounded-full bg-primary dark:bg-yellow-300 text-white dark:text-gray-900 text-2xl mr-6 flex-shrink-0" aria-hidden="true">
                    <i class="fas fa-user-tie"></i>
                    <span class="sr-only">원장 인사말</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold mb-1 text-gray-800 dark:text-white">원장 인사말</h4>
                    <p class="text-gray-600 dark:text-gray-300">“아이들의 웃음과 성장이 곧 저희의 기쁨입니다. 신뢰받는 보육, 따뜻한 돌봄을 약속드립니다.”</p>
                  </div>
                </div>
                <!-- 연혁 -->
                <div class="flex items-start bg-background dark:bg-gray-800 rounded-xl border-l-4 border-secondary dark:border-yellow-300 p-6 mb-2">
                  <div class="w-14 h-14 flex items-center justify-center rounded-full bg-secondary dark:bg-yellow-300 text-white dark:text-gray-900 text-2xl mr-6 flex-shrink-0" aria-hidden="true">
                    <i class="fas fa-calendar-alt"></i>
                    <span class="sr-only">연혁</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold mb-1 text-gray-800 dark:text-white">연혁</h4>
                    <ul class="text-gray-600 dark:text-gray-300 text-sm list-disc ml-4">
                      <li>2015년 아이뜨락 어린이집 개원</li>
                      <li>2018년 국가 우수 보육시설 인증</li>
                      <li>2022년 누적 800명 아이 돌봄 달성</li>
                    </ul>
                  </div>
                </div>
                <!-- 주요 프로그램 요약 -->
                <div class="flex items-start bg-background dark:bg-gray-800 rounded-xl border-l-4 border-accent dark:border-yellow-300 p-6">
                  <div class="w-14 h-14 flex items-center justify-center rounded-full bg-accent dark:bg-yellow-300 text-white dark:text-gray-900 text-2xl mr-6 flex-shrink-0" aria-hidden="true">
                    <i class="fas fa-book-open"></i>
                    <span class="sr-only">주요 프로그램</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold mb-1 text-gray-800 dark:text-white">주요 프로그램</h4>
                    <ul class="text-gray-600 dark:text-gray-300 text-sm list-disc ml-4">
                      <li>음악·미술·체육 등 창의성/감성/신체 발달 프로그램</li>
                      <li>자연친화·사회성·언어 발달 활동</li>
                      <li>연장보육, 맞춤형 돌봄 서비스</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div class="relative group">
                <img 
                  src="/image/20240909_05.jpg" 
                  alt="어린이집 전경" 
                  class="w-[320px] h-[240px] md:w-[350px] md:h-[260px] object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105" 
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                  <div class="p-4 text-white">
                    <h3 class="font-bold">어린이집 전경</h3>
                    <p class="text-sm">즐겁게 배우고 성장하는 공간</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 배경 장식 효과 -->
        <div class="pointer-events-none absolute inset-0 z-0">
          <div class="absolute left-1/4 top-1/3 w-72 h-72 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl"></div>
          <div class="absolute right-1/5 bottom-1/4 w-80 h-80 bg-primary/10 dark:bg-primary/5 rounded-full blur-2xl"></div>
        </div>
      </section>
    `;
  }
}

customElements.define('about-component', AboutComponent);