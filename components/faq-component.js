/**
 * FAQ(자주 묻는 질문        <!-- 대표 이미지 갤러리 제거 - FAQ 내용에 집중 -->
        <div class="mb-8"></div>
 * 학부모/방문자용 FAQ 섹션
 */
class FAQComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="faq" class="relative py-20 bg-gradient-to-br from-background via-white to-accent/10 overflow-hidden">
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-yellow-300 flex items-center justify-center gap-3">
              <span><i class="fas fa-question-circle text-accent text-4xl"></i></span>
              자주 묻는 질문
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">학부모님들이 가장 많이 궁금해하시는 내용을 정리했습니다.</p>
          </div>
          <!-- 대표 이미지 갤러리 -->
          <div class="mb-10 flex flex-col md:flex-row gap-8 items-center justify-center" role="group" aria-label="FAQ 대표 이미지 갤러리">
            <img src="/image/20240909_05.jpg" alt="FAQ 대표 이미지1" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
            <img src="/image/pinterest_29.jpg" alt="FAQ 대표 이미지2" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
            <img src="/image/sample_img_03.jpg" alt="FAQ 대표 이미지3" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
          </div>
          <div class="space-y-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-primary dark:text-yellow-300 mb-2">Q. 입소 절차는 어떻게 되나요?</h3>
              <p class="text-gray-700 dark:text-gray-300">전화 또는 방문 상담 후, 원서 작성 및 서류 제출 → 입소 결정 → 적응 기간 운영 순으로 진행됩니다.</p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-primary dark:text-yellow-300 mb-2">Q. 식단표는 어디서 볼 수 있나요?</h3>
              <p class="text-gray-700 dark:text-gray-300">매주 홈페이지 및 알림장에 식단표가 게시됩니다. 알레르기/특이사항은 별도 상담 가능합니다.</p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-primary dark:text-yellow-300 mb-2">Q. 연장보육/맞춤 돌봄이 가능한가요?</h3>
              <p class="text-gray-700 dark:text-gray-300">오전 7:30~오후 7:30까지 연장보육이 가능하며, 맞춤형 돌봄 서비스도 제공합니다.</p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-primary dark:text-yellow-300 mb-2">Q. 등원/하원은 어떻게 관리되나요?</h3>
              <p class="text-gray-700 dark:text-gray-300">출입 관리 시스템과 교사 동행으로 안전하게 등·하원이 이루어집니다.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('faq-component', FAQComponent);
