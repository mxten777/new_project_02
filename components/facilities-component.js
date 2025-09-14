/**
 * Facilities(시설) 컴포넌트
 * 교육 시설 및 환경 소개 섹션
 */
class FacilitiesComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="facilities" class="relative py-20 bg-white dark:bg-gray-800 overflow-hidden section-animate">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-4 text-primary dark:text-yellow-300 drop-shadow-lg tracking-tight">최상의 교육 환경</h2>
            <p class="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">아이들의 안전과 발달을 위한 특별한 공간</p>
          </div>

          <!-- 시설 갤러리 - 큰 사진 / 설명 교차 배치 -->
          <div class="space-y-24 mt-8">
            <!-- 시설 항목 1: 안전한 놀이터 -->
            <div class="flex flex-col md:flex-row items-center md:space-x-10">
              <div class="w-full md:w-1/2 mb-8 md:mb-0">
                <div class="relative rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] group">
                  <img src="/public/images/sphere-02.jpg" alt="안전한 놀이터" class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-60"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform transition-transform duration-300">
                    <span class="inline-block px-4 py-1 bg-primary dark:bg-yellow-300 text-white dark:text-gray-900 rounded-full text-sm font-bold mb-3 shadow-lg">안전한 환경</span>
                    <h3 class="text-2xl md:text-3xl font-bold mb-2">친환경 놀이터</h3>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 flex flex-col justify-center">
                <h3 class="text-2xl md:text-3xl font-bold mb-4 text-primary dark:text-yellow-300">안전한 놀이 공간</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">아이들이 마음껏 뛰어놀 수 있는 안전한 놀이터입니다. 모든 놀이 기구는 정기적인 안전 검사를 통과한 제품들로, 부드러운 바닥재를 사용하여 낙상 시에도 충격을 최소화합니다.</p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-700 dark:text-gray-300">
                    <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary/20 dark:bg-yellow-300/20 text-primary dark:text-yellow-300 mr-3">
                      <i class="fas fa-check text-sm"></i>
                    </span>
                    친환경 소재 놀이기구
                  </li>
                  <li class="flex items-center text-gray-700 dark:text-gray-300">
                    <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary/20 dark:bg-yellow-300/20 text-primary dark:text-yellow-300 mr-3">
                      <i class="fas fa-check text-sm"></i>
                    </span>
                    충격 흡수 바닥재
                  </li>
                  <li class="flex items-center text-gray-700 dark:text-gray-300">
                    <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary/20 dark:bg-yellow-300/20 text-primary dark:text-yellow-300 mr-3">
                      <i class="fas fa-check text-sm"></i>
                    </span>
                    연령별 맞춤 놀이 공간
                  </li>
                </ul>
              </div>
            </div>

            <!-- 시설 항목 2: 교실 환경 -->
            <div class="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-10">
              <div class="w-full md:w-1/2 mb-8 md:mb-0">
                <div class="relative rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] group">
                  <img src="/public/images/pinterest_29.jpg" alt="모던한 교실 환경" class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-60"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform transition-transform duration-300">
                    <span class="inline-block px-4 py-1 bg-secondary dark:bg-secondary text-white dark:text-gray-900 rounded-full text-sm font-bold mb-3 shadow-lg">최적의 환경</span>
                    <h3 class="text-2xl md:text-3xl font-bold mb-2">창의적인 교실</h3>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 flex flex-col justify-center">
                <h3 class="text-2xl md:text-3xl font-bold mb-4 text-secondary dark:text-secondary">모던한 교실 환경</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">아이들의 창의성과 학습 효과를 높이기 위해 설계된 교실입니다. 자연광이 풍부하게 들어오는 창문과 친환경 소재의 가구들로 구성되어 있으며, 다양한 학습 활동을 위한 공간이 마련되어 있습니다.</p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-700 dark:text-gray-300">
                    <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-secondary/20 dark:bg-secondary/20 text-secondary dark:text-secondary mr-3">
                      <i class="fas fa-check text-sm"></i>
                    </span>
                    자연광이 풍부한 설계
                  </li>
                  <li class="flex items-center text-gray-700 dark:text-gray-300">
                    <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-secondary/20 dark:bg-secondary/20 text-secondary dark:text-secondary mr-3">
                      <i class="fas fa-check text-sm"></i>
                    </span>
                    친환경 가구 및 교구
                  </li>
                  <li class="flex items-center text-gray-700 dark:text-gray-300">
                    <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-secondary/20 dark:bg-secondary/20 text-secondary dark:text-secondary mr-3">
                      <i class="fas fa-check text-sm"></i>
                    </span>
                    다양한 학습 코너
                  </li>
                </ul>
              </div>
            </div>

            <!-- 시설 항목 3: 급식 시설 -->
            <div class="flex flex-col md:flex-row items-center md:space-x-10">
              <div class="w-full md:w-1/2 mb-8 md:mb-0">
                <div class="relative rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] group">
                  <img src="/public/images/ring-green.jpg" alt="건강한 급식 시설" class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-60"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform transition-transform duration-300">
                    <span class="inline-block px-4 py-1 bg-accent dark:bg-accent text-white dark:text-gray-900 rounded-full text-sm font-bold mb-3 shadow-lg">건강한 식단</span>
                    <h3 class="text-2xl md:text-3xl font-bold mb-2">깨끗한 급식 시설</h3>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 flex flex-col justify-center">
                <h3 class="text-2xl md:text-3xl font-bold mb-4 text-accent dark:text-accent">건강한 급식 시설</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">아이들의 건강을 최우선으로 생각하는 급식 시설입니다. 매일 신선한 재료로 조리된 영양 균형이 잡힌 식단을 제공하며, 철저한 위생 관리로 안전한 식사 환경을 조성합니다.</p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-700 dark:text-gray-300">
                    <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-accent/20 dark:bg-accent/20 text-accent dark:text-accent mr-3">
                      <i class="fas fa-check text-sm"></i>
                    </span>
                    영양사가 직접 설계한 메뉴
                  </li>
                  <li class="flex items-center text-gray-700 dark:text-gray-300">
                    <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-accent/20 dark:bg-accent/20 text-accent dark:text-accent mr-3">
                      <i class="fas fa-check text-sm"></i>
                    </span>
                    식품 알레르기 고려
                  </li>
                  <li class="flex items-center text-gray-700 dark:text-gray-300">
                    <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-accent/20 dark:bg-accent/20 text-accent dark:text-accent mr-3">
                      <i class="fas fa-check text-sm"></i>
                    </span>
                    HACCP 기준 위생 관리
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 시설 통계 -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/5 dark:via-secondary/5 dark:to-accent/5 rounded-3xl p-8 shadow-xl">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-primary dark:text-yellow-300 mb-2">12</div>
              <div class="text-gray-700 dark:text-gray-300 font-medium">교실</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-secondary dark:text-secondary mb-2">3</div>
              <div class="text-gray-700 dark:text-gray-300 font-medium">놀이터</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-accent dark:text-accent mb-2">250</div>
              <div class="text-gray-700 dark:text-gray-300 font-medium">수용 인원</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-primary dark:text-yellow-300 mb-2">18</div>
              <div class="text-gray-700 dark:text-gray-300 font-medium">교사</div>
            </div>
          </div>
        </div>

        <!-- 배경 장식 효과 -->
        <div class="pointer-events-none absolute inset-0 z-0">
          <div class="absolute left-1/5 top-1/4 w-64 h-64 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl"></div>
          <div class="absolute right-1/4 bottom-1/3 w-72 h-72 bg-secondary/5 dark:bg-secondary/5 rounded-full blur-2xl"></div>
          <div class="absolute right-1/3 top-1/2 w-60 h-60 bg-accent/5 dark:bg-accent/5 rounded-full blur-3xl"></div>
        </div>
      </section>
    `;
  }
}

customElements.define('facilities-component', FacilitiesComponent);