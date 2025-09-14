// DOM 로드 완료 후 실행
document.addEventListener("DOMContentLoaded", function () {
  // 헤더 다크모드 토글 버튼 동기화
  const darkModeToggleHeader = document.getElementById('darkModeToggleHeader');
  const darkModeIconHeader = document.getElementById('darkModeIconHeader');
  const darkModeToggleMain = document.getElementById('darkModeToggle');
  const darkModeIconMain = document.getElementById('darkModeIcon');

  function setDarkModeUI(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      if (darkModeIconHeader) darkModeIconHeader.classList.remove('fa-moon'), darkModeIconHeader.classList.add('fa-sun');
      if (darkModeIconMain) darkModeIconMain.classList.remove('fa-moon'), darkModeIconMain.classList.add('fa-sun');
    } else {
      document.documentElement.classList.remove('dark');
      if (darkModeIconHeader) darkModeIconHeader.classList.remove('fa-sun'), darkModeIconHeader.classList.add('fa-moon');
      if (darkModeIconMain) darkModeIconMain.classList.remove('fa-sun'), darkModeIconMain.classList.add('fa-moon');
    }
  }

  function toggleDarkMode() {
    const isDark = !document.documentElement.classList.contains('dark');
    setDarkModeUI(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  if (darkModeToggleHeader) {
    darkModeToggleHeader.addEventListener('click', toggleDarkMode);
  }
  if (darkModeToggleMain) {
    darkModeToggleMain.addEventListener('click', toggleDarkMode);
  }

  // 초기 테마 적용
  const userTheme = localStorage.getItem('theme');
  if (userTheme === 'dark' || (!userTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setDarkModeUI(true);
  } else {
    setDarkModeUI(false);
  }
  // 서비스 워커 등록
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js").then(
        function (registration) {
          console.log("ServiceWorker 등록 성공:", registration.scope);
        },
        function (err) {
          console.log("ServiceWorker 등록 실패:", err);
        }
      );
    });
  }


  // 앱 설치 프롬프트 (커스텀 버튼 항상 노출)
  let deferredPrompt;
  const installBtn = document.createElement("button");
  installBtn.textContent = "📱 앱 설치하기";
  installBtn.className = "btn btn-primary install-btn fixed top-4 right-4 z-[1001] text-sm px-4 py-2 shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-transform duration-150";
  installBtn.setAttribute("aria-label", "앱 설치하기");
  installBtn.style.display = "none";
  document.body.appendChild(installBtn);

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "block";
  });

  installBtn.addEventListener("click", function () {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
          console.log("사용자가 앱 설치를 허용했습니다");
        } else {
          console.log("사용자가 앱 설치를 거부했습니다");
        }
        deferredPrompt = null;
        installBtn.style.display = "none";
      });
    }
  });

  window.addEventListener("appinstalled", function () {
    installBtn.style.display = "none";
  });
  // 오프라인 UX: 오프라인 시 안내 모달 표시
  function showOfflineModal() {
    if (document.querySelector("#offline-modal")) return;
    const modal = document.createElement("div");
    modal.id = "offline-modal";
    modal.className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-[10000]";
    modal.innerHTML = `
      <div class="bg-white rounded-xl p-8 shadow-xl text-center max-w-xs w-full animate-in" role="dialog" aria-modal="true" aria-labelledby="offline-title">
        <div class="text-4xl mb-2" aria-hidden="true">📡</div>
        <h2 id="offline-title" class="text-lg font-bold mb-2">오프라인 상태입니다</h2>
        <p class="text-gray-600 mb-4">인터넷 연결이 끊어졌습니다.<br>일부 기능이 제한될 수 있습니다.</p>
        <button class="btn btn-primary mt-2" onclick="document.getElementById('offline-modal').remove()" aria-label="닫기">닫기</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
  window.addEventListener("offline", showOfflineModal);
  // 모든 버튼에 마이크로 인터랙션(눌림 효과) 추가
  document.querySelectorAll('button, .btn').forEach(btn => {
    btn.addEventListener('mousedown', function() {
      btn.classList.add('scale-95');
    });
    btn.addEventListener('mouseup', function() {
      btn.classList.remove('scale-95');
    });
    btn.addEventListener('mouseleave', function() {
      btn.classList.remove('scale-95');
    });
    btn.addEventListener('touchstart', function() {
      btn.classList.add('scale-95');
    });
    btn.addEventListener('touchend', function() {
      btn.classList.remove('scale-95');
    });
  });

  // 모바일 메뉴 토글
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // 메뉴 링크 클릭 시 메뉴 닫기
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // 스크롤에 따른 헤더 스타일 변경
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 상담 신청 폼 처리
  const consultationForm = document.querySelector(".consultation-form");
  if (consultationForm) {
    consultationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // 폼 데이터 수집
      const formData = new FormData(this);
      const data = {
        parentName: formData.get("parent-name"),
        childAge: formData.get("child-age"),
        phone: formData.get("phone"),
        preferredTime: formData.get("preferred-time"),
        message: formData.get("message"),
      };

      // 유효성 검사
      if (
        !data.parentName ||
        !data.childAge ||
        !data.phone ||
        !data.preferredTime
      ) {
        alert("필수 항목을 모두 입력해주세요.");
        return;
      }

      // 전화번호 유효성 검사
      const phoneRegex = /^[0-9-+().\s]+$/;
      if (!phoneRegex.test(data.phone)) {
        alert("올바른 전화번호를 입력해주세요.");
        return;
      }

      // 성공 메시지 표시
      showSuccessMessage();

      // 폼 리셋
      this.reset();
    });
  }

  // 스크롤 애니메이션
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // 섹션별 reveal 애니메이션 (더 많은 섹션 포함)
  document
    .querySelectorAll(
      ".feature-card, .program-card, .teacher-card, .facility-item, .testimonial-card, .about-item, .schedule-item, section, .floating-buttons"
    )
    .forEach((el) => {
      observer.observe(el);
    });

  // 숫자 카운터 애니메이션
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      element.textContent = Math.floor(start);

      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      }
    }, 16);
  }

  // 통계 숫자 애니메이션 (필요시 HTML에 추가)
  const stats = document.querySelectorAll(".stat-number");
  stats.forEach((stat) => {
    const target = parseInt(stat.dataset.target);
    if (target) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target, target);
            observer.unobserve(entry.target);
          }
        });
      });
      observer.observe(stat);
    }
  });
});

// 모든 내부 anchor 링크에 부드러운 스크롤 적용
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        const section = document.querySelector(href);
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = section.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
});

// 성공 메시지 표시
function showSuccessMessage() {
  // 모달 생성
  const modal = document.createElement("div");
  modal.className = "success-modal";
  modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>상담 신청 완료!</h3>
            <p>소중한 상담 신청을 해주셔서 감사합니다.<br>
            빠른 시일 내에 연락드리겠습니다.</p>
            <button onclick="closeModal()" class="btn btn-primary">확인</button>
        </div>
    `;

  document.body.appendChild(modal);

  // 모달 스타일 추가 (한 번만)
  if (!document.querySelector("#modal-styles")) {
    const style = document.createElement("style");
    style.id = "modal-styles";
    style.textContent = `
            .success-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background: white;
                padding: 3rem 2rem;
                border-radius: 15px;
                text-align: center;
                max-width: 400px;
                width: 90%;
                animation: slideUp 0.3s ease;
            }
            
            .modal-icon {
                font-size: 4rem;
                color: #4caf50;
                margin-bottom: 1rem;
            }
            
            .modal-content h3 {
                font-size: 1.5rem;
                margin-bottom: 1rem;
                color: #333;
            }
            
            .modal-content p {
                color: #666;
                line-height: 1.6;
                margin-bottom: 2rem;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
    document.head.appendChild(style);
  }

  // 3초 후 자동 닫기
  setTimeout(closeModal, 3000);
}

// 모달 닫기
function closeModal() {
  const modal = document.querySelector(".success-modal");
  if (modal) {
    modal.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
}

// 이미지 지연 로딩
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// 페이지 로드 완료 후 지연 로딩 시작
window.addEventListener("load", lazyLoadImages);

// 모바일 메뉴 애니메이션을 위한 CSS 추가
const mobileMenuStyles = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            z-index: 999;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
        
        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out;
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;

// 스타일 추가
if (!document.querySelector("#mobile-menu-styles")) {
  const style = document.createElement("style");
  style.id = "mobile-menu-styles";
  style.textContent = mobileMenuStyles;
  document.head.appendChild(style);
}

// 스크롤 시 플로팅 버튼 표시/숨기기
window.addEventListener("scroll", function () {
  const floatingButtons = document.querySelector(".floating-buttons");
  if (floatingButtons) {
    if (window.scrollY > 300) {
      floatingButtons.style.opacity = "1";
      floatingButtons.style.visibility = "visible";
    } else {
      floatingButtons.style.opacity = "0";
      floatingButtons.style.visibility = "hidden";
    }
  }
});

// 초기 플로팅 버튼 숨김
document.addEventListener("DOMContentLoaded", function () {
  const floatingButtons = document.querySelector(".floating-buttons");
  if (floatingButtons) {
    floatingButtons.style.transition = "all 0.3s ease";
    floatingButtons.style.opacity = "0";
    floatingButtons.style.visibility = "hidden";
  }
});

// 전화 클릭 시 확인 메시지 (선택사항)
document.addEventListener("DOMContentLoaded", function () {
  const callButtons = document.querySelectorAll('a[href^="tel:"]');
  callButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const phoneNumber = this.href.replace("tel:", "");
      if (!confirm(`${phoneNumber}로 전화를 걸까요?`)) {
        e.preventDefault();
      }
    });
  });
});

// 앱 설치 버튼 표시
function showInstallButton() {
  // 설치 버튼을 동적으로 생성하거나 기존 버튼을 표시
  const installBtn = document.createElement("button");
  installBtn.textContent = "📱 앱으로 설치";
  installBtn.className = "btn btn-primary install-btn";
  installBtn.style.position = "fixed";
  installBtn.style.top = "10px";
  installBtn.style.right = "10px";
  installBtn.style.zIndex = "1001";
  installBtn.style.fontSize = "0.9rem";
  installBtn.style.padding = "0.5rem 1rem";

  installBtn.addEventListener("click", function () {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
          console.log("사용자가 앱 설치를 허용했습니다");
        } else {
          console.log("사용자가 앱 설치를 거부했습니다");
        }
        deferredPrompt = null;
        document.body.removeChild(installBtn);
      });
    }
  });

  document.body.appendChild(installBtn);

  // 10초 후 자동으로 숨기기
  setTimeout(() => {
    if (document.body.contains(installBtn)) {
      document.body.removeChild(installBtn);
    }
  }, 10000);
}
