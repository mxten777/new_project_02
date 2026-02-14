# 🌿 아이뜨락 어린이집 — Premium Childcare & Education

> **수원 아이뜨락 어린이집**  
> 북유럽 감성의 프리미엄 보육 공간에서 아이들의 무한한 가능성을 키워나갑니다.

## 📋 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **타겟** | 수원 아이뜨락 어린이집 |
| **목표** | 글로벌 표준 프리미엄급 랜딩 페이지 + PWA |
| **디자인** | 북유럽(Scandinavian) 감성 프리미엄 |
| **버전** | v2.0 — Premium Renovation (2026.02.14) |

## 🛠 기술 스택

### Frontend

- **HTML5** — 시맨틱 마크업, Open Graph 메타 태그
- **Tailwind CSS** (CDN) — 유틸리티 퍼스트, 커스텀 디자인 시스템
- **Custom CSS** — 프리미엄 애니메이션, 다크 모드, 접근성
- **Vanilla JavaScript** — 제로 의존성 인터랙션
- **Font Awesome 6.5.1** — 아이콘
- **Google Fonts** — Inter, Noto Sans KR, Playfair Display

### 라이브러리

- **AOS (Animate On Scroll) 2.3.4** — 스크롤 기반 입장 애니메이션
- **Swiper.js 11** — 터치 지원 캐러셀 (학부모 후기)

### PWA

- **Web App Manifest** — 앱 설치 지원
- **Service Worker** — 캐싱 & 오프라인 지원

### 배포

- **Vercel** — 프로덕션 배포
- **GitHub** — 소스 관리

## 🎨 디자인 시스템

### 컬러 팔레트 — "Warm Scandinavian"

| 색상 | 용도 | 값 |
|------|------|-----|
| **Cream** | 배경 | `#FEFCF9` ~ `#E8D9C0` |
| **Sage** | 주 브랜드 | `#F2F5F0` ~ `#6B8A5E` |
| **Terracotta** | 액센트 | `#FEF2EE` ~ `#D14D38` |
| **Ocean** | 서브 액센트 | `#EFF8FF` ~ `#3B98E8` |
| **Charcoal** | 텍스트 | `#F6F6F6` ~ `#1A1A1A` |
| **Lavender** | 포인트 | `#F8F5FF` ~ `#9B7AF2` |
| **Peach** | 보조 | `#FFF5F0` ~ `#FF9060` |

### 타이포그래피

| 폰트 | 용도 | 웨이트 |
|------|------|--------|
| **Inter** | 본문, UI | 300~900 |
| **Noto Sans KR** | 한글 본문 | 300~900 |
| **Playfair Display** | 제목 이탤릭 액센트 | 400, 600, 700 |

### 프리미엄 쉐도우

- `premium` — 일반 호버 카드
- `premium-lg` — 강조 카드
- `premium-xl` — 히어로 이미지
- `glow-sage/terracotta/ocean` — 색상별 글로우

## 📱 섹션 구성 (11개)

| # | 섹션 | 설명 |
|---|------|------|
| 1 | **로딩 스크린** | 씨앗 아이콘 + 프로그레스 바 |
| 2 | **히어로** | 유기적 배경 + 플로팅 카드 + 신뢰 지표 |
| 3 | **트러스트 마키** | 인증·수상 무한 스크롤 밴드 |
| 4 | **소개** | 4개 카운터 애니메이션 + 3개 피처 카드 |
| 5 | **교육 철학** | 4단계 넘버링 철학 리스트 |
| 6 | **프로그램** | 6개 호버 카드 (미술/음악/체육/독서/자연/사회성) |
| 7 | **교사진** | 4명 프로필 (그라디언트 원형 + 역할 뱃지) |
| 8 | **시설** | 6개 호버 리빌 카드 (교실/놀이터/급식실/도서관/체육관/텃밭) |
| 9 | **하루일과** | 중앙 타임라인 (07:30~17:00) |
| 10 | **학부모 후기** | Swiper 캐러셀 4슬라이드 (다크 배경) |
| 11 | **FAQ** | 아코디언 6문항 |
| 12 | **CTA 밴드** | 세이지→오션 그라디언트 풀폭 |
| 13 | **상담 신청** | 폼(4필드) + 연락처 카드 + 지도 | 
| 14 | **푸터** | 4컬럼 + 뉴스레터 + SNS |

## ✨ 인터랙션 & 애니메이션

- **AOS** — 스크롤 기반 fade-up/fade-left/fade-right/zoom-in
- **커스텀 커서** — 데스크톱 닷 + 링 (mix-blend-difference)
- **카운터 애니메이션** — IntersectionObserver + ease-out-cubic
- **플로팅 애니메이션** — float-slow/medium/fast, morph
- **마키 밴드** — CSS infinite marquee
- **Swiper 캐러셀** — autoplay + 반응형 breakpoints
- **FAQ 아코디언** — max-height transition
- **폼 제출** — 스피너 → 성공 모달
- **다크 모드** — 토글 + localStorage + 시스템 감지
- **스크롤 프로그레스** — 상단 그라디언트 바
- **네비게이션** — 스크롤 시 glassmorphism 배경
- **모바일 메뉴** — 풀스크린 오버레이 + 햄버거 애니메이션

## ♿ 접근성

- `prefers-reduced-motion` — 모든 애니메이션 비활성화
- `focus-visible` — 키보드 포커스 인디케이터
- `aria-label` — 버튼/링크 접근성 레이블
- 키보드 ESC — 모달/메뉴 닫기
- 탭 비활성 시 애니메이션 정지
- 프린트 스타일 지원

## 📁 프로젝트 구조

```
new_project_02/
├── index.html          # 메인 HTML (프리미엄 리뉴얼)
├── styles.css          # 프리미엄 CSS 디자인 시스템
├── script.js           # 인터랙션 & 애니메이션
├── manifest.json       # PWA 매니페스트
├── sw.js              # 서비스 워커
├── vercel.json        # Vercel 배포 설정
└── README.md          # 프로젝트 문서
```

## 🚀 배포

```bash
# 로컬 개발
npx serve .

# Vercel 배포
vercel --prod
```

## 📞 연락처

- 📧 이메일: info@aitrak.kr
- 📞 전화: 031-123-4567
- 📍 주소: 수원시 영통구 아이뜨락로 123

---

**© 2026 아이뜨락 어린이집. All rights reserved.**
