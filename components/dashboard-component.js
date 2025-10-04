/**
 * Dashboard        <!-- 대표 이미지 갤러리 제거 - 대시보드 내용에 집중 -->
        <div class="mb-8"></div> 컴포넌트
 * 관리자/원장/교사진용 주요 현황 및 관리 기능 샘플
 */
class DashboardComponent extends HTMLElement {
  constructor() { super(); }
  connectedCallback() {
    this.innerHTML = `
      <section id="dashboard" class="relative py-20 bg-gradient-to-br from-background via-white to-primary/10 overflow-hidden">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-primary dark:text-yellow-300 drop-shadow-lg flex items-center justify-center gap-3">
              <span><i class="fas fa-tachometer-alt text-accent text-4xl"></i></span>
              전문가 대시보드
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">운영 현황, 출석/상담/알림장, 교사진/시설 관리, 통계까지 한눈에!</p>
          </div>
          <!-- 대표 이미지 갤러리 -->
          <div class="mb-10 flex flex-col md:flex-row gap-8 items-center justify-center" role="group" aria-label="대시보드 대표 이미지 갤러리">
            <img src="/image/20240909_05.jpg" alt="대시보드 대표 이미지1" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
            <img src="/image/pinterest_29.jpg" alt="대시보드 대표 이미지2" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
            <img src="/image/sample_img_03.jpg" alt="대시보드 대표 이미지3" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
          </div>
          <!-- 현황 카드 -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center">
              <div class="text-4xl font-extrabold text-primary dark:text-yellow-300 mb-2">82</div>
              <div class="text-gray-700 dark:text-gray-300">재원 아동 수</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center">
              <div class="text-4xl font-extrabold text-secondary dark:text-yellow-300 mb-2">12</div>
              <div class="text-gray-700 dark:text-gray-300">교사진 수</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center">
              <div class="text-4xl font-extrabold text-accent dark:text-yellow-300 mb-2">5</div>
              <div class="text-gray-700 dark:text-gray-300">진행 중 이벤트</div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center">
              <div class="text-4xl font-extrabold text-primary dark:text-yellow-300 mb-2">97%</div>
              <div class="text-gray-700 dark:text-gray-300">출석률</div>
            </div>
          </div>
          <!-- 주요 관리 기능 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-primary dark:text-yellow-300 mb-2"><i class="fas fa-bullhorn mr-2"></i>공지사항 등록</h3>
              <input type="text" class="w-full p-2 border rounded mb-2" placeholder="공지 제목" />
              <textarea class="w-full p-2 border rounded mb-2" rows="3" placeholder="공지 내용"></textarea>
              <button class="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">등록</button>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-accent dark:text-yellow-300 mb-2"><i class="fas fa-utensils mr-2"></i>식단표 관리</h3>
              <input type="text" class="w-full p-2 border rounded mb-2" placeholder="식단명" />
              <textarea class="w-full p-2 border rounded mb-2" rows="3" placeholder="식단 내용"></textarea>
              <button class="bg-accent text-white px-4 py-2 rounded hover:bg-primary transition">등록</button>
            </div>
          </div>
          <!-- 추가 전문가 기능 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-secondary dark:text-yellow-300 mb-2"><i class="fas fa-comments mr-2"></i>상담/알림장 관리</h3>
              <input type="text" class="w-full p-2 border rounded mb-2" placeholder="상담 제목" />
              <textarea class="w-full p-2 border rounded mb-2" rows="2" placeholder="상담 내용"></textarea>
              <button class="bg-secondary text-white px-4 py-2 rounded hover:bg-primary transition">등록</button>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h3 class="font-semibold text-primary dark:text-yellow-300 mb-2"><i class="fas fa-chalkboard-teacher mr-2"></i>교사진/시설 관리</h3>
              <input type="text" class="w-full p-2 border rounded mb-2" placeholder="교사진/시설명" />
              <textarea class="w-full p-2 border rounded mb-2" rows="2" placeholder="관리 내용"></textarea>
              <button class="bg-secondary text-white px-4 py-2 rounded hover:bg-accent transition">등록</button>
            </div>
          </div>
          <!-- 통계 차트(샘플) -->
          <div class="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow p-8">
            <h3 class="font-semibold text-primary dark:text-yellow-300 mb-4"><i class="fas fa-chart-bar mr-2"></i>통계 차트(샘플)</h3>
            <div class="w-full h-40 flex items-center justify-center text-gray-400 dark:text-gray-500">
              <span class="text-2xl">[차트 영역: 연령별 분포, 출석률, 이벤트 참여 등]</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('dashboard-component', DashboardComponent);
