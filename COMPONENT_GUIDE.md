# 웹사이트 컴포넌트 기반 구조화 가이드

이 문서는 `아이뜨락 어린이집` 웹사이트의 컴포넌트 기반 아키텍처 전환에 대한 가이드를 제공합니다.

## 목차
1. [개요](#개요)
2. [폴더 구조](#폴더-구조)
3. [컴포넌트 시스템](#컴포넌트-시스템)
4. [마이그레이션 단계](#마이그레이션-단계)
5. [개발 및 확장 가이드](#개발-및-확장-가이드)

## 개요

기존의 단일 HTML 파일(index.html)이 너무 길고 구조적이지 않아 유지보수와 확장이 어려운 상황입니다. 이를 해결하기 위해 웹 컴포넌트 기반의 모듈식 아키텍처로 전환합니다.

### 주요 이점
- **모듈화**: 각 UI 요소를 독립적인 컴포넌트로 분리
- **재사용성**: 컴포넌트를 여러 곳에서 재사용 가능
- **유지보수성**: 특정 기능 수정 시 해당 컴포넌트만 수정
- **확장성**: 새로운 기능 추가가 용이
- **협업**: 여러 개발자가 동시에 다른 컴포넌트 작업 가능

## 폴더 구조

```
new_project_02/
├── components/               # 웹 컴포넌트 폴더
│   ├── header-component.js   # 헤더 컴포넌트
│   ├── hero-component.js     # 히어로 섹션 컴포넌트
│   ├── testimonial-slider-component.js  # 후기 슬라이더 컴포넌트
│   ├── footer-component.js   # 푸터 컴포넌트
│   ├── component-manager.js  # 컴포넌트 관리 및 공통 기능
│   └── ...                   # 기타 컴포넌트
├── image/                    # 이미지 리소스
├── dist/                     # 빌드된 CSS (Tailwind)
├── script.js                 # 공통 스크립트
├── styles.css                # 기본 스타일
├── animations.css            # 애니메이션 스타일
├── index.html                # 기존 HTML 파일 (참고용)
├── index-modular.html        # 새로운 모듈화된 HTML 파일
└── ...                       # 기타 파일
```

## 컴포넌트 시스템

현재 구현된 웹 컴포넌트:

1. **header-component**: 웹사이트 상단 헤더와 네비게이션
2. **hero-component**: 메인 소개 영역
3. **testimonial-slider-component**: 후기 슬라이더
4. **footer-component**: 웹사이트 하단부

### 컴포넌트 사용 방법

```html
<!-- HTML에서 컴포넌트 사용 -->
<header-component></header-component>
<hero-component></hero-component>
<testimonial-slider-component></testimonial-slider-component>
<footer-component></footer-component>
```

## 마이그레이션 단계

1. **현재 상태**: 일부 섹션이 컴포넌트화 되었으며, `index-modular.html`에서 사용 중
2. **다음 단계**:
   - 나머지 섹션을 컴포넌트로 변환 (about, programs, facilities, teachers, contact 등)
   - 각 컴포넌트의 내부 기능 테스트
   - 모든 기능이 정상 작동하는지 확인 후 `index-modular.html`을 `index.html`로 전환

## 개발 및 확장 가이드

### 새 컴포넌트 추가하기

1. `components/` 폴더에 새 JS 파일 생성 (예: `about-component.js`)
2. 웹 컴포넌트 형식으로 코드 작성:

```javascript
class AboutComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- 컴포넌트 HTML 코드 -->
    `;
  }
}

customElements.define('about-component', AboutComponent);
```

3. `component-manager.js`에 컴포넌트 import 추가:

```javascript
import './about-component.js';
```

4. HTML에서 컴포넌트 사용:

```html
<about-component></about-component>
```

### 컴포넌트 확장 및 커스터마이징

컴포넌트에 속성을 추가하여 재사용성을 높일 수 있습니다:

```javascript
// 속성을 받아 사용하는 컴포넌트 예시
class CustomComponent extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'color'];
  }
  
  get title() {
    return this.getAttribute('title') || '기본 제목';
  }
  
  get color() {
    return this.getAttribute('color') || 'primary';
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback() {
    this.render();
  }
  
  render() {
    this.innerHTML = `
      <div class="text-${this.color}">
        <h2>${this.title}</h2>
        <!-- 추가 내용 -->
      </div>
    `;
  }
}

customElements.define('custom-component', CustomComponent);
```

사용 예:
```html
<custom-component title="맞춤 제목" color="accent"></custom-component>
```

### 모범 사례

1. **컴포넌트 독립성**: 각 컴포넌트는 독립적으로 작동해야 함
2. **스타일 격리**: 컴포넌트 내부 스타일은 가능한 범위를 제한
3. **문서화**: 각 컴포넌트의 기능과 사용법 문서화
4. **접근성**: ARIA 속성과 키보드 접근성 보장
5. **성능 최적화**: 불필요한 DOM 조작 최소화