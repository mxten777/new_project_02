/**
 * Admissio        <!-- 대표 이미지 갤러리 제거 - 입소 안내 내용에 집중 -->
        <div class="mb-8"></div>e(입소 안내) 컴포넌트
 */
class AdmissionGuideComponent extends HTMLElement {
  constructor() { super(); }
  connectedCallback() {
    this.innerHTML = `
      <section id="admission-guide" class="relative py-20 bg-gradient-to-br from-white via-background to-accent/10 overflow-hidden">
        <div class="max-w-3xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-secondary dark:text-yellow-300 flex items-center justify-center gap-3">
              <span><i class="fas fa-sign-in-alt text-accent text-4xl"></i></span>
              입소 안내
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">입소 절차와 준비 서류, 적응 기간 등 주요 정보를 안내합니다.</p>
          </div>
          <!-- 대표 이미지 갤러리 -->
          <div class="mb-10 flex flex-col md:flex-row gap-8 items-center justify-center" role="group" aria-label="입소 안내 대표 이미지 갤러리">
            <img src="/image/20240909_05.jpg" alt="입소 안내 대표 이미지1" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
            <img src="/image/pinterest_29.jpg" alt="입소 안내 대표 이미지2" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
            <img src="/image/sample_img_03.jpg" alt="입소 안내 대표 이미지3" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
          </div>
          <div class="space-y-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-secondary dark:text-yellow-300 mb-2">입소 절차</h3>
              <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300">
                <li>상담 신청 및 방문</li>
                <li>원서 작성 및 서류 제출</li>
                <li>입소 결정 및 적응 기간 운영</li>
              </ul>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-secondary dark:text-yellow-300 mb-2">준비 서류</h3>
              <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300">
                <li>입소 원서</li>
                <li>가족관계증명서</li>
                <li>예방접종 증명서</li>
                <li>기타 필요 서류</li>
              </ul>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-secondary dark:text-yellow-300 mb-2">적응 기간 안내</h3>
              <p class="text-gray-700 dark:text-gray-300">입소 후 1~2주간 적응 기간을 운영하여 아이가 새로운 환경에 자연스럽게 적응할 수 있도록 돕습니다.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('admission-guide-component', AdmissionGuideComponent);
