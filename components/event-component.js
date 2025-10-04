/**
 * Event(이벤        <!-- 대표 이미지 갤러리 제거 - 이벤트 내용에 집중 -->
        <div class="mb-8"></div>컴포넌트
 */
class EventComponent extends HTMLElement {
  constructor() { super(); }
  connectedCallback() {
    this.innerHTML = `
      <section id="event" class="relative py-20 bg-gradient-to-br from-white via-background to-primary/10 overflow-hidden">
        <div class="max-w-3xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-yellow-300 flex items-center justify-center gap-3">
              <span><i class="fas fa-bullhorn text-accent text-4xl"></i></span>
              이벤트 & 공지사항
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">어린이집의 최신 소식과 이벤트를 안내합니다.</p>
          </div>
          <!-- 대표 이미지 갤러리 -->
          <div class="mb-10 flex flex-col md:flex-row gap-8 items-center justify-center" role="group" aria-label="이벤트 대표 이미지 갤러리">
            <img src="/image/20240909_05.jpg" alt="이벤트 대표 이미지1" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
            <img src="/image/pinterest_29.jpg" alt="이벤트 대표 이미지2" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
            <img src="/image/sample_img_03.jpg" alt="이벤트 대표 이미지3" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
          </div>
          <div class="space-y-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-primary dark:text-yellow-300 mb-2">10월 가을 운동회</h3>
              <p class="text-gray-700 dark:text-gray-300">10월 15일(수) 오전 10시, 어린이집 운동장에서 가을 운동회가 열립니다. 가족 모두 함께 참여해 주세요!</p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-primary dark:text-yellow-300 mb-2">신입생 모집</h3>
              <p class="text-gray-700 dark:text-gray-300">2025년 신입생을 모집합니다. 상담 및 입소 문의는 언제든 환영합니다.</p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-primary dark:text-yellow-300 mb-2">알림장 앱 도입</h3>
              <p class="text-gray-700 dark:text-gray-300">모바일 알림장 앱을 통해 실시간 소식과 식단, 사진을 받아보실 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('event-component', EventComponent);
