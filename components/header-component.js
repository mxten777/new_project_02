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
            <span class="text-accent">아이</span>뜨락 <span class="hidden md:inline">어린이집</span>
          </a>

          <!-- 메인 내비+다크모드 토글 -->
          <div class="flex items-center gap-4">
            <nav>
              <ul class="nav-menu flex gap-6 md:static md:flex-row md:shadow-none">
                <li><a href="#about" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">소개</a></li>
                <li><a href="#programs" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">프로그램</a></li>
                <li><a href="#facilities" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">시설</a></li>
                <li><a href="#teachers" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">교사진</a></li>
                <li><a href="#testimonials" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">후기</a></li>
                <li><a href="#contact" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-300 transition-colors">문의</a></li>
              </ul>
            </nav>
          </div>

          <!-- 모바일 메뉴 토글 -->
          <div class="hamburger flex flex-col gap-1.5 cursor-pointer md:hidden">
            <span class="bar w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300"></span>
            <span class="bar w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300"></span>
            <span class="bar w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300"></span>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);