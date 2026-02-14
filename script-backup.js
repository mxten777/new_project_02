// === 주/야(라이트/다크) 테마 토글 ===
document.addEventListener('DOMContentLoaded', function () {

  const btnPC = document.getElementById('themeTogglePC');
  const btnMobile = document.getElementById('themeToggleMobile');
  const iconPC = document.getElementById('themeIconPC');
  const iconMobile = document.getElementById('themeIconMobile');
  // 새로 추가된 top-36 버튼
  const btnTop36 = document.getElementById('themeToggleTop36');
  const iconTop36 = document.getElementById('themeIconTop36');
  const body = document.body;

  // 디버그: PC 토글 버튼 DOM 및 스타일 상태 출력
  if (btnPC) {
    console.log('[DEBUG] PC 토글 버튼 존재함');
    console.log('[DEBUG] btnPC.style.display:', btnPC.style.display);
    console.log('[DEBUG] getComputedStyle(btnPC).display:', window.getComputedStyle(btnPC).display);
    console.log('[DEBUG] btnPC.className:', btnPC.className);
  } else {
    console.warn('[DEBUG] PC 토글 버튼이 DOM에 없음');
  }

  // 현재 테마 상태 반환
  function isDark() {
    const dark = body.classList.contains('theme-dark');
    console.log('[theme] isDark:', dark, '| classList:', body.className);
    return dark;
  }

  // 아이콘 동기화
  function syncIcons(dark) {
    if (iconPC) {
      iconPC.classList.remove('fa-moon', 'fa-sun');
      iconPC.classList.add(dark ? 'fa-sun' : 'fa-moon');
      console.log('[theme] PC icon:', iconPC.className);
    }
    if (iconMobile) {
      iconMobile.classList.remove('fa-moon', 'fa-sun');
      iconMobile.classList.add(dark ? 'fa-sun' : 'fa-moon');
      console.log('[theme] Mobile icon:', iconMobile.className);
    }
  }

  // 테마 적용 및 저장
  function setTheme(dark) {
    body.classList.remove('theme-light', 'theme-dark');
    body.classList.add(dark ? 'theme-dark' : 'theme-light');
    syncIcons(dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    console.log('[theme] setTheme:', dark ? 'dark' : 'light', '| classList:', body.className);
  }

  // 현재 테마를 토글
  function toggleTheme() {
    setTheme(!isDark());
  }

  // 버튼 클릭 이벤트 연결
  if (btnPC) btnPC.addEventListener('click', toggleTheme);
  if (btnMobile) btnMobile.addEventListener('click', toggleTheme);
  if (btnTop36) btnTop36.addEventListener('click', toggleTheme);

  // 페이지 로드 시 저장된 테마 적용
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') setTheme(true);
  else if (savedTheme === 'light') setTheme(false);
  else {
    // 시스템 다크모드 연동 (최초 방문)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);
  }
});