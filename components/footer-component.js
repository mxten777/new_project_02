/**
 * 푸터 컴포넌트
 * 사이트 하단부 정보 및 링크
 */
class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- 로고 및 소개 -->
            <div class="mb-8 md:mb-0">
              <div class="text-2xl font-bold mb-4">
                <span class="text-accent">아이</span>뜨락 <span>어린이집</span>
              </div>
              <p class="text-gray-400 mb-6 leading-relaxed">
                아이들의 행복한 미래를 위한 첫 걸음, 아이뜨락 어린이집이 함께합니다.
              </p>
              <div class="flex gap-4">
                <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="인스타그램">
                  <i class="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="카카오톡">
                  <i class="fas fa-comment text-xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="유튜브">
                  <i class="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>

            <!-- 빠른 링크 -->
            <div class="mb-8 md:mb-0">
              <h3 class="text-lg font-bold mb-4 text-accent">바로가기</h3>
              <ul class="space-y-2">
                <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">소개</a></li>
                <li><a href="#programs" class="text-gray-400 hover:text-white transition-colors">프로그램</a></li>
                <li><a href="#facilities" class="text-gray-400 hover:text-white transition-colors">시설</a></li>
                <li><a href="#teachers" class="text-gray-400 hover:text-white transition-colors">교사진</a></li>
                <li><a href="#testimonials" class="text-gray-400 hover:text-white transition-colors">후기</a></li>
                <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">문의</a></li>
              </ul>
            </div>

            <!-- 연락처 -->
            <div class="mb-8 md:mb-0">
              <h3 class="text-lg font-bold mb-4 text-accent">연락처</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-3">
                  <i class="fas fa-map-marker-alt mt-1 text-primary dark:text-yellow-300"></i>
                  <span class="text-gray-400">경기도 수원시 장안구 123번길 45</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-phone-alt mt-1 text-primary dark:text-yellow-300"></i>
                  <span class="text-gray-400">031-123-4567</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-envelope mt-1 text-primary dark:text-yellow-300"></i>
                  <span class="text-gray-400">info@aitrak.co.kr</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-clock mt-1 text-primary dark:text-yellow-300"></i>
                  <span class="text-gray-400">평일: 07:30 - 19:30<br/>토요일: 휴무<br/>일요일: 휴무</span>
                </li>
              </ul>
            </div>

            <!-- 뉴스레터 -->
            <div>
              <h3 class="text-lg font-bold mb-4 text-accent">소식 받기</h3>
              <p class="text-gray-400 mb-4">아이뜨락의 다양한 소식과 육아 정보를 받아보세요.</p>
              <form class="mb-4">
                <div class="flex">
                  <input type="email" placeholder="이메일 주소" class="bg-gray-800 dark:bg-gray-900 px-4 py-2 text-white rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary w-full" />
                  <button type="submit" class="bg-primary dark:bg-yellow-300 text-white dark:text-gray-900 px-4 py-2 rounded-r-lg hover:bg-primary-dark transition-colors">구독</button>
                </div>
              </form>
              <p class="text-xs text-gray-500">
                구독은 언제든지 취소 가능합니다. 개인정보는 안전하게 보호됩니다.
              </p>
            </div>
          </div>

          <hr class="border-gray-800 dark:border-gray-700 my-8" />

          <!-- 저작권 및 하단 링크 -->
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="text-gray-500 text-sm text-center md:text-left">
              &copy; 2025 아이뜨락 어린이집. All rights reserved.
            </div>
            <div class="flex gap-4 text-sm">
              <a href="#" class="text-gray-500 hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" class="text-gray-500 hover:text-white transition-colors">이용약관</a>
              <a href="#" class="text-gray-500 hover:text-white transition-colors">사이트맵</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);