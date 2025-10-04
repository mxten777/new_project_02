/**
 * 헤더 컴포넌트
 * 네비게이션 메뉴와 로고를 포함한 웹사이트 헤더
 */
class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm">
        <div class="container mx-auto flex justify-between items-center py-4 px-4">
          <!-- 로고 -->
          <a href="#" class="logo text-2xl font-bold text-primary dark:text-yellow-300">
            <img src="/image/baikal_logo.png" alt="BAIKAL AI 로고" class="inline-block h-10 w-auto mr-3 align-middle" />
            <span class="text-accent align-middle">아이</span>뜨락 <span class="hidden md:inline align-middle">어린이집</span>
          </a>

          <!-- 데스크톱 네비게이션 -->
          <div class="flex items-center gap-4">
            <nav class="hidden md:block">
              <ul class="nav-menu flex gap-4 text-sm lg:gap-6 lg:text-base">
                <li><a href="#about" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">소개</a></li>
                <li><a href="#programs" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">프로그램</a></li>
                <li><a href="#teachers" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">교사진</a></li>
                <li><a href="#facilities" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">시설</a></li>
                <li><a href="#admission-guide" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">입소</a></li>
                <li><a href="#menu" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">급식</a></li>
                <li><a href="#testimonials" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">후기</a></li>
                <li><a href="#contact" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">문의</a></li>
              </ul>
            </nav>
          </div>

          <!-- 모바일 메뉴 토글 -->
          <button class="hamburger flex flex-col gap-1.5 cursor-pointer md:hidden" id="mobileMenuToggle">
            <span class="bar w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300"></span>
            <span class="bar w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300"></span>
            <span class="bar w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300"></span>
          </button>
        </div>

        <!-- 모바일 메뉴 -->
        <nav class="mobile-nav md:hidden fixed top-16 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg transform -translate-y-full opacity-0 transition-all duration-300 ease-out" id="mobileMenu">
          <ul class="flex flex-col p-4 space-y-2">
            <li><a href="#about" class="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">소개</a></li>
            <li><a href="#programs" class="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">프로그램</a></li>
            <li><a href="#teachers" class="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">교사진</a></li>
            <li><a href="#facilities" class="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">시설</a></li>
            <li><a href="#admission-guide" class="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">입소안내</a></li>
            <li><a href="#menu" class="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">급식</a></li>
            <li><a href="#testimonials" class="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">후기</a></li>
            <li><a href="#faq" class="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">FAQ</a></li>
            <li><a href="#contact" class="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">문의</a></li>
          </ul>
        </nav>
      </header>
    `;

    // 모바일 메뉴 토글 기능 추가
    this.initializeMobileMenu();
  }

  initializeMobileMenu() {
    const mobileMenuToggle = this.querySelector('#mobileMenuToggle');
    const mobileMenu = this.querySelector('#mobileMenu');
    const hamburger = this.querySelector('.hamburger');

    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('mobile-menu-open');
        
        if (isOpen) {
          // 메뉴 닫기
          mobileMenu.classList.remove('mobile-menu-open');
          mobileMenu.style.transform = 'translateY(-100%)';
          mobileMenu.style.opacity = '0';
          hamburger.classList.remove('active');
        } else {
          // 메뉴 열기
          mobileMenu.classList.add('mobile-menu-open');
          mobileMenu.style.transform = 'translateY(0)';
          mobileMenu.style.opacity = '1';
          hamburger.classList.add('active');
        }
      });

      // 메뉴 링크 클릭 시 모바일 메뉴 닫기
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('mobile-menu-open');
          mobileMenu.style.transform = 'translateY(-100%)';
          mobileMenu.style.opacity = '0';
          hamburger.classList.remove('active');
        });
      });
    }
  }
}

customElements.define('header-component', HeaderComponent);