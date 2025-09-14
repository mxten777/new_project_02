/**
 * Contact(연락처) 컴포넌트
 * 연락처 및 문의 양식을 제공하는 섹션
 */
class ContactComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="contact" class="relative py-20 bg-gradient-to-br from-[#f5f7fa] to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden section-animate">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-4 text-primary dark:text-yellow-300 drop-shadow-lg tracking-tight">문의하기</h2>
            <p class="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">궁금한 점이 있으시면 언제든지 연락주세요</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- 연락처 정보 -->
            <div class="bg-white dark:bg-gray-800/80 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
              <h3 class="text-2xl font-bold mb-6 text-primary dark:text-yellow-300">연락처 정보</h3>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 dark:bg-yellow-300/10 text-primary dark:text-yellow-300">
                    <i class="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">주소</h4>
                    <p class="mt-1 text-gray-700 dark:text-gray-300">서울특별시 강남구 테헤란로 123<br>행복 빌딩 5층</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-secondary/10 dark:bg-secondary/10 text-secondary dark:text-secondary">
                    <i class="fas fa-phone text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">전화번호</h4>
                    <p class="mt-1 text-gray-700 dark:text-gray-300">02-123-4567</p>
                    <p class="text-gray-700 dark:text-gray-300">010-9876-5432</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-accent/10 dark:bg-accent/10 text-accent dark:text-accent">
                    <i class="fas fa-envelope text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">이메일</h4>
                    <p class="mt-1 text-gray-700 dark:text-gray-300">info@vibeschool.com</p>
                    <p class="text-gray-700 dark:text-gray-300">admission@vibeschool.com</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 dark:bg-yellow-300/10 text-primary dark:text-yellow-300">
                    <i class="fas fa-clock text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">운영 시간</h4>
                    <p class="mt-1 text-gray-700 dark:text-gray-300">월요일 - 금요일: 오전 8시 - 오후 6시</p>
                    <p class="text-gray-700 dark:text-gray-300">토요일: 오전 9시 - 오후 1시 (방문상담)</p>
                  </div>
                </div>
              </div>

              <!-- 소셜 미디어 링크 -->
              <div class="mt-10">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">소셜 미디어</h4>
                <div class="flex space-x-4">
                  <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full bg-[#3b5998] text-white hover:opacity-90 transition-opacity">
                    <i class="fab fa-facebook-f"></i>
                    <span class="sr-only">페이스북</span>
                  </a>
                  <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full bg-[#1da1f2] text-white hover:opacity-90 transition-opacity">
                    <i class="fab fa-twitter"></i>
                    <span class="sr-only">트위터</span>
                  </a>
                  <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full bg-[#e1306c] text-white hover:opacity-90 transition-opacity">
                    <i class="fab fa-instagram"></i>
                    <span class="sr-only">인스타그램</span>
                  </a>
                  <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:opacity-90 transition-opacity">
                    <i class="fab fa-linkedin-in"></i>
                    <span class="sr-only">링크드인</span>
                  </a>
                  <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full bg-[#ff0000] text-white hover:opacity-90 transition-opacity">
                    <i class="fab fa-youtube"></i>
                    <span class="sr-only">유튜브</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- 문의 양식 -->
            <div class="bg-white dark:bg-gray-800/80 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
              <h3 class="text-2xl font-bold mb-6 text-secondary dark:text-secondary">문의 양식</h3>
              
              <form id="contact-form" class="space-y-6">
                <!-- 이름 입력 필드 -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">이름 *</label>
                  <input type="text" id="name" name="name" required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary dark:focus:ring-yellow-300 focus:border-primary dark:focus:border-yellow-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="이름을 입력하세요">
                </div>

                <!-- 이메일 입력 필드 -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">이메일 *</label>
                  <input type="email" id="email" name="email" required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary dark:focus:ring-yellow-300 focus:border-primary dark:focus:border-yellow-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="이메일 주소를 입력하세요">
                </div>

                <!-- 전화번호 입력 필드 -->
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">전화번호</label>
                  <input type="tel" id="phone" name="phone"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary dark:focus:ring-yellow-300 focus:border-primary dark:focus:border-yellow-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="전화번호를 입력하세요">
                </div>

                <!-- 문의 유형 선택 -->
                <div>
                  <label for="inquiry-type" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">문의 유형 *</label>
                  <select id="inquiry-type" name="inquiry-type" required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary dark:focus:ring-yellow-300 focus:border-primary dark:focus:border-yellow-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option value="" disabled selected>문의 유형을 선택하세요</option>
                    <option value="admission">입학 문의</option>
                    <option value="program">프로그램 문의</option>
                    <option value="tour">방문 및 견학</option>
                    <option value="other">기타 문의</option>
                  </select>
                </div>

                <!-- 메시지 텍스트 영역 -->
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">메시지 *</label>
                  <textarea id="message" name="message" rows="5" required
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary dark:focus:ring-yellow-300 focus:border-primary dark:focus:border-yellow-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    placeholder="문의 내용을 입력하세요"></textarea>
                </div>

                <!-- 제출 버튼 -->
                <div>
                  <button type="submit"
                    class="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary dark:from-yellow-300 dark:to-secondary text-white dark:text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-yellow-300">
                    <i class="fas fa-paper-plane mr-2"></i> 문의하기
                  </button>
                </div>

                <!-- 알림 메시지 (기본적으로 숨김) -->
                <div id="form-message" class="hidden p-4 rounded-lg text-center font-medium"></div>
              </form>
            </div>
          </div>

          <!-- 지도 섹션 -->
          <div class="mt-16 bg-white dark:bg-gray-800/80 rounded-3xl shadow-2xl p-6 border border-gray-100 dark:border-gray-700 overflow-hidden backdrop-blur-sm">
            <h3 class="text-2xl font-bold mb-4 text-primary dark:text-yellow-300">찾아오시는 길</h3>
            <div class="aspect-video relative rounded-2xl overflow-hidden">
              <!-- 카카오맵 API 연동 -->
              <div id="kakao-map" class="w-full h-full">
                <!-- 카카오맵이 로딩되는 동안 표시할 placeholder -->
                <div class="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-2xl p-4">
                  <div class="text-center">
                    <i class="fas fa-map-marked-alt text-4xl text-primary dark:text-yellow-300 mb-4"></i>
                    <p class="text-gray-700 dark:text-gray-300">아이뜨락 어린이집</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm mt-2">서울특별시 강남구 테헤란로 123</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Tel. 02-123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 배경 장식 효과 -->
        <div class="pointer-events-none absolute inset-0 z-0">
          <div class="absolute left-1/3 top-1/4 w-72 h-72 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl"></div>
          <div class="absolute right-1/5 bottom-1/3 w-80 h-80 bg-secondary/5 dark:bg-secondary/5 rounded-full blur-2xl"></div>
        </div>
      </section>
    `;
    
    // 폼 제출 처리 및 카카오맵 로드
    this.setupFormHandler();
    this.tryLoadKakaoMap();
  }
  
  tryLoadKakaoMap() {
    // OpenStreetMap iframe 적용 (API키 불필요)
    var mapContainer = document.getElementById('kakao-map');
    if (mapContainer) {
      mapContainer.innerHTML = `
        <iframe width="100%" height="320" style="border-radius:1rem;border:1px solid #ccc;" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=127.068815%2C37.250601%2C127.072815%2C37.254601&amp;layer=mapnik&amp;marker=37.252601%2C127.070815"></iframe>
        <div style="margin-top:12px; font-size:1.05rem; color:#444; font-weight:500;">
          경기 수원시 영통구 중부대로271번길 27-9<br>원천주공아파트 102동 107호
        </div>
        <small><a href="https://www.openstreetmap.org/?mlat=37.252601&amp;mlon=127.070815#map=18/37.252601/127.070815" target="_blank">지도 크게 보기 (OpenStreetMap)</a></small>
      `;
    }
  }
  
  setupFormHandler() {
    // DOM이 완전히 로드된 후 실행
    setTimeout(function() {
      var form = document.getElementById('contact-form');
      var formMessage = document.getElementById('form-message');
      
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // 성공 메시지 표시 (데모용)
          if (formMessage) {
            formMessage.textContent = '문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.';
            formMessage.classList.remove('hidden', 'bg-red-100', 'text-red-700');
            formMessage.classList.add('bg-green-100', 'text-green-700');
            
            // 폼 초기화
            form.reset();
            
            // 3초 후 메시지 숨김
            setTimeout(function() {
              formMessage.classList.add('hidden');
            }, 3000);
          }
        });
      }
    }, 100);
  }
}

customElements.define('contact-component', ContactComponent);