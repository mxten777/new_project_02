/* ═══════════════════════════════════════════════════
   아이뜨락 어린이집 — Premium JavaScript
   Global Standard Premium Interactions
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Loading Screen ───
  const loadingScreen = document.getElementById('loadingScreen');
  const loadingBar = document.getElementById('loadingBar');
  let loadProgress = 0;

  const loadingInterval = setInterval(() => {
    loadProgress += Math.random() * 25 + 5;
    if (loadProgress > 100) loadProgress = 100;
    if (loadingBar) loadingBar.style.width = loadProgress + '%';
    if (loadProgress >= 100) {
      clearInterval(loadingInterval);
      setTimeout(() => {
        if (loadingScreen) {
          loadingScreen.classList.add('loaded');
          document.body.style.overflow = '';
          // Initialize AOS after loading
          if (typeof AOS !== 'undefined') {
            AOS.init({
              duration: 800,
              easing: 'ease-out-cubic',
              once: true,
              offset: 60,
              disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            });
          }
        }
      }, 300);
    }
  }, 120);

  // Prevent body scroll during loading
  document.body.style.overflow = 'hidden';

  // ─── Scroll Progress Bar ───
  const scrollProgress = document.getElementById('scrollProgress');

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) {
      scrollProgress.style.width = progress + '%';
    }
  }

  // ─── Custom Cursor ───
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  function updateCursor(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    }
  }

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    if (cursorRing) {
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
    }
    requestAnimationFrame(animateRing);
  }

  if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', updateCursor);
    animateRing();
  }

  // ─── Navigation ───
  const mainNav = document.getElementById('mainNav');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Nav background
    if (mainNav) {
      if (scrollY > 50) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    }

    // Scroll-to-top button
    if (scrollTopBtn) {
      if (scrollY > 600) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    updateScrollProgress();
  }

  // Throttled scroll
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        handleScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // Scroll to top
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Mobile Menu ───
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      mobileMenu.classList.add('open');
      hamburger.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });

  // ─── Smooth Scroll for Anchor Links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = mainNav ? mainNav.offsetHeight : 80;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ─── Counter Animation ───
  const counters = document.querySelectorAll('.counter');

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const isDecimal = el.hasAttribute('data-decimal');
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (isDecimal) {
        el.textContent = current.toFixed(1);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (isDecimal) {
          el.textContent = target.toFixed(1);
        } else {
          el.textContent = target.toLocaleString();
        }
      }
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // ─── FAQ Accordion ───
  const faqToggles = document.querySelectorAll('.faq-toggle');

  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
      const faqItem = this.closest('.faq-item');
      const content = faqItem.querySelector('.faq-content');
      const isActive = faqItem.classList.contains('active');

      // Close all others
      document.querySelectorAll('.faq-item.active').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
          const c = item.querySelector('.faq-content');
          c.style.maxHeight = null;
          c.classList.add('hidden');
        }
      });

      if (isActive) {
        faqItem.classList.remove('active');
        content.style.maxHeight = null;
        setTimeout(() => content.classList.add('hidden'), 400);
      } else {
        faqItem.classList.add('active');
        content.classList.remove('hidden');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // ─── Swiper Testimonial Carousel ───
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonial-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });
  }

  // ─── Dark Mode ───
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
    } else {
      document.documentElement.classList.remove('dark');
      if (themeIcon) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
  }

  // Load saved theme or use system preference
  const savedTheme = localStorage.getItem('aitrak-theme');
  if (savedTheme) {
    applyTheme(savedTheme === 'dark');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = !document.documentElement.classList.contains('dark');
      applyTheme(isDark);
      localStorage.setItem('aitrak-theme', isDark ? 'dark' : 'light');
    });
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('aitrak-theme')) {
      applyTheme(e.matches);
    }
  });

  // ─── Contact Form ───
  const contactForm = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simple validation passed (HTML5 handles required)
      const formData = new FormData(this);

      // Simulate form submission
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 전송 중...';
      submitBtn.disabled = true;

      setTimeout(() => {
        // Show success modal
        if (successModal) {
          successModal.classList.add('show');
        }
        // Reset form
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }

  // Close modal
  window.closeModal = function () {
    if (successModal) {
      successModal.classList.remove('show');
    }
  };

  // Close modal on backdrop click
  if (successModal) {
    successModal.addEventListener('click', function (e) {
      if (e.target === this) {
        window.closeModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (successModal && successModal.classList.contains('show')) {
        window.closeModal();
      }
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        toggleMobileMenu();
      }
    }
  });

  // ─── Intersection Observer for Nav Active State ───
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -80% 0px'
  });

  sections.forEach(section => navObserver.observe(section));

  // ─── Performance: Lazy Animation ───
  // Pause animations when tab is not visible
  document.addEventListener('visibilitychange', () => {
    const animatedEls = document.querySelectorAll('[class*="animate-"]');
    if (document.hidden) {
      animatedEls.forEach(el => el.style.animationPlayState = 'paused');
    } else {
      animatedEls.forEach(el => el.style.animationPlayState = 'running');
    }
  });

  // ─── Initial scroll handler ───
  handleScroll();

})();
