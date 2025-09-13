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
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">아이뜨락 어린이집을 소개합니다</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">2015년 개원 이래 800여 명의 아이들과 함께 성장해온 신뢰받는 어린이집입니다</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="space-y-6">
                <div class="flex items-start bg-background dark:bg-gray-800 rounded-xl border-l-4 border-primary dark:border-yellow-300 p-6 mb-2">
                  <div class="w-14 h-14 flex items-center justify-center rounded-full bg-primary dark:bg-yellow-300 text-white dark:text-gray-900 text-2xl mr-6 flex-shrink-0" aria-hidden="true">
                    <i class="fas fa-users"></i>
                    <span class="sr-only">경험 많은 교사진</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold mb-1 text-gray-800 dark:text-white">경험 많은 교사진</h4>
                    <p class="text-gray-600 dark:text-gray-300">평균 경력 8년 이상의 전문 보육교사들이 아이들을 돌봅니다</p>
                  </div>
                </div>
                <div class="flex items-start bg-background dark:bg-gray-800 rounded-xl border-l-4 border-primary dark:border-yellow-300 p-6 mb-2">
                  <div class="w-14 h-14 flex items-center justify-center rounded-full bg-primary dark:bg-yellow-300 text-white dark:text-gray-900 text-2xl mr-6 flex-shrink-0" aria-hidden="true">
                    <i class="fas fa-award"></i>
                    <span class="sr-only">인증받은 시설</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold mb-1 text-gray-800 dark:text-white">인증받은 시설</h4>
                    <p class="text-gray-600 dark:text-gray-300">국가에서 인증한 우수 보육시설로 안전하고 쾌적한 환경을 제공합니다</p>
                  </div>
                </div>
                <div class="flex items-start bg-background dark:bg-gray-800 rounded-xl border-l-4 border-primary dark:border-yellow-300 p-6">
                  <div class="w-14 h-14 flex items-center justify-center rounded-full bg-primary dark:bg-yellow-300 text-white dark:text-gray-900 text-2xl mr-6 flex-shrink-0" aria-hidden="true">
                    <i class="fas fa-clock"></i>
                    <span class="sr-only">연장보육 가능</span>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold mb-1 text-gray-800 dark:text-white">연장보육 가능</h4>
                    <p class="text-gray-600 dark:text-gray-300">오전 7시 30분부터 오후 7시 30분까지 연장보육을 지원합니다</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div class="relative group">
                <img 
                  src="/image/sample_img_03.jpg" 
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