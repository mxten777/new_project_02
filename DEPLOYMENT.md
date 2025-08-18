# 배포 가이드 (Vercel 표준)

## 🚀 Vercel 배포 (팀 표준)

### 1. Vercel CLI 설치

```bash
npm install -g vercel
```

### 2. 프로젝트 배포

```bash
# 프로젝트 디렉토리에서 실행
vercel

# 첫 배포시 설정
# - Set up and deploy? Y
# - Which scope? (팀 선택)
# - Link to existing project? N
# - Project name: happy-daycare-mvp
# - Directory: ./
```

### 3. 프로덕션 배포

```bash
vercel --prod
```

### 4. 도메인 설정 (선택사항)

```bash
# 커스텀 도메인 추가
vercel domains add yourdomain.com
vercel alias your-deployment-url.vercel.app yourdomain.com
```

## 📁 Vercel 설정 파일

### vercel.json 생성

```json
{
  "version": 2,
  "name": "happy-daycare-mvp",
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    },
    {
      "source": "/(.*).js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 🔄 자동 배포 설정

### GitHub 연동

1. Vercel 대시보드에서 "Import Project"
2. GitHub 저장소 선택
3. 자동 빌드 설정 완료
4. `main` 브랜치 푸시시 자동 배포

### 환경 변수 설정

```bash
# Vercel 대시보드에서 설정
# Settings > Environment Variables
CONTACT_EMAIL=happy@daycare.co.kr
PHONE_NUMBER=02-1234-5678
```

## 📊 성능 모니터링

### Vercel Analytics 활성화

1. 프로젝트 설정에서 Analytics 활성화
2. 실시간 방문자 추적
3. Core Web Vitals 모니터링

### 추가 도구 연동 (선택사항)

- Google Analytics
- Hotjar (사용자 행동 분석)
- Sentry (에러 모니터링)

## 🎯 배포 체크리스트

### 배포 전 확인사항

- [ ] 실제 연락처 정보 입력
- [ ] 실제 이미지로 플레이스홀더 교체
- [ ] SEO 메타태그 최적화
- [ ] PWA 아이콘 교체
- [ ] 폼 액션 URL 설정

### 배포 후 확인사항

- [ ] 모든 링크 정상 동작
- [ ] 모바일 반응형 테스트
- [ ] PWA 설치 기능 테스트
- [ ] 상담 폼 제출 테스트
- [ ] 페이지 로딩 속도 체크

## 🔧 트러블슈팅

### 일반적인 문제

1. **서비스 워커 캐시 문제**

   - 브라우저 개발자 도구에서 캐시 초기화
   - Application > Storage > Clear site data

2. **PWA 매니페스트 오류**

   - Chrome DevTools > Application > Manifest 확인
   - 아이콘 경로 및 크기 점검

3. **모바일 메뉴 작동 안함**
   - JavaScript 파일 로딩 확인
   - 터치 이벤트 바인딩 점검

### Vercel 관련 문제

1. **빌드 실패**

   - vercel.json 설정 확인
   - 파일 경로 대소문자 점검

2. **도메인 연결 문제**
   - DNS 설정 확인 (CNAME 레코드)
   - SSL 인증서 자동 갱신 대기

## 📞 지원

문제 발생시 연락처:

- 기술 지원: tech@vibecoding.com
- Vercel 문서: https://vercel.com/docs
