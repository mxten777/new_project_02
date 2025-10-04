/**
 * Menu(식단표        <!-- 대표 이미지 갤러리 제거 - 식단표 내용에 집중 -->
        <div class="mb-8"></div>
 */
class MenuComponent extends HTMLElement {
  constructor() { super(); }
  connectedCallback() {
    this.innerHTML = `
      <section id="menu" class="relative py-20 bg-gradient-to-br from-background via-white to-accent/10 overflow-hidden">
        <div class="max-w-3xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-accent dark:text-yellow-300 flex items-center justify-center gap-3">
              <span><i class="fas fa-utensils text-accent text-4xl"></i></span>
              식단표
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">이번 주 식단표를 안내합니다. 알레르기/특이사항은 별도 상담 가능합니다.</p>
          </div>
          <!-- 대표 이미지 갤러리 -->
          <div class="mb-10 flex flex-col md:flex-row gap-8 items-center justify-center" role="group" aria-label="식단표 대표 이미지 갤러리">
            <img src="/image/20240909_05.jpg" alt="식단표 대표 이미지1" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
            <img src="/image/pinterest_29.jpg" alt="식단표 대표 이미지2" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
            <img src="/image/sample_img_03.jpg" alt="식단표 대표 이미지3" class="w-32 h-32 object-cover rounded-2xl shadow-lg focus:outline-accent focus:ring-4 focus:ring-accent/40 transition-transform duration-300 hover:scale-105 active:scale-95" loading="lazy" tabindex="0" />
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow text-center">
              <thead>
                <tr>
                  <th class="py-3 px-4 text-primary dark:text-yellow-300">요일</th>
                  <th class="py-3 px-4 text-primary dark:text-yellow-300">아침</th>
                  <th class="py-3 px-4 text-primary dark:text-yellow-300">점심</th>
                  <th class="py-3 px-4 text-primary dark:text-yellow-300">간식</th>
                </tr>
              </thead>
              <tbody>
                <tr><td class="py-2 px-4">월</td><td>현미밥, 계란찜</td><td>잡채, 미역국</td><td>과일, 우유</td></tr>
                <tr><td class="py-2 px-4">화</td><td>식빵, 딸기잼</td><td>카레라이스, 오이무침</td><td>요거트, 바나나</td></tr>
                <tr><td class="py-2 px-4">수</td><td>옥수수빵, 삶은 달걀</td><td>불고기, 김치국</td><td>떡, 우유</td></tr>
                <tr><td class="py-2 px-4">목</td><td>쌀밥, 멸치볶음</td><td>닭볶음탕, 콩나물국</td><td>과일, 두유</td></tr>
                <tr><td class="py-2 px-4">금</td><td>식빵, 치즈</td><td>된장국, 오므라이스</td><td>쿠키, 우유</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('menu-component', MenuComponent);
